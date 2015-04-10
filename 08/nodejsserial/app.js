var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(3000);

function handler (req, res) {
  fs.readFile(__dirname + '/web/socket.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

var com = require("serialport");

//var port="/dev/ttyUSB0";
var port="/dev/pts/8";

var serialPort = new com.SerialPort(port, {
    //baudrate: 9600,
    //parser: com.parsers.readline('\r\n')
  });

serialPort.on('open',function() {
  console.log('Port open');
});

serialPort.on('data', function(data) {
  var recieved=data.toString();
  recieved=recieved.replace(/(\r\n|\n|\r)/gm,"");
  console.log(recieved);
  var analogread = recieved.split(',');
  io.emit('from_server', { analogread: analogread });
  
});
