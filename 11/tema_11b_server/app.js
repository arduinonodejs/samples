var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');
var ArduinoFirmata = require('arduino-firmata');

app.listen(8000);

var relays=[
    { number: 0, text: "Relay1", checked: false },
    { number: 1, text: "Relay2", checked: false },
    { number: 2, text: "Relay3", checked: false },
    { number: 3, text: "Relay4", checked: false }
     ];

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

//var port_arduino='/dev/tty.usbmodemfa1341';
var port_arduino='/dev/ttyACM0';
var number=0;
var arduino = new ArduinoFirmata();

arduino.connect(port_arduino);

arduino.on('connect', function() {
  
  console.log("connect!! "+arduino.serialport_name);
  console.log("board version: "+arduino.boardVersion);

  io.on('connection', function (socket) {
    
    socket.emit('init', relays);
    
    socket.on('from_client', function (data) {
	    socket.broadcast.emit('from_server', data);
	    
	    console.log(data);
	    
	    /*
		Digital 7 --> COM1
		Digital 6 --> COM2
		Digital 5 --> COM3
		Digital 4 --> COM4
		*/
		
		switch (data.number) {
			
			case 0:
			 console.log("first");
			 number=7;
			break;
			case 1:
			 console.log("second");
			 number=6;
			break;
			case 2:
			 console.log("third");
			 number=5;
			break;
			case 3:
			 console.log("fourth");
			 number=4;
			break;
		
		}
		
		arduino.digitalWrite(number, data.state);
		relays[data.number].checked = data.state; 
		
	  });

    
  });

});