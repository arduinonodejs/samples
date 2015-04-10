var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8000);

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

var firmata = require('firmata');
var board = new firmata.Board(port_arduino, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('connected');

    console.log('Firmware: ' + board.firmware.name + '-' + board.firmware.version.major + '.' + board.firmware.version.minor);
    
    var relays = [4, 5, 6 ,7];
    
    relays.forEach(function(ledPin) {
    	board.pinMode(ledPin, board.MODES.OUTPUT);
        /*
        board.digitalRead(ledPin, function(read) {
            console.log("The Led "+ LedPin + "is: " +read);
        });
        */
        var test = board.pins[board.digitalPins[ledPin]];
        console.log(ledPin+" - "+test);
    });
    
});

io.on('connection', function (socket) {
  socket.emit('init', { server: 'Welcome to server' });
  socket.on('from_client', function (data) {
    console.log(data);
    /*
	Digital 7 --> COM1
	Digital 6 --> COM2
	Digital 5 --> COM3
	Digital 4 --> COM4
	*/
	
	switch (data.number) {
		
		case 1:
		 console.log("first");
		 if (data.state==true) {
		 	board.digitalWrite(7, board.HIGH);
		 } else {
			board.digitalWrite(7, board.LOW);
		 }
		break;
		case 2:
		 console.log("second");
		 if (data.state==true) {
		 	board.digitalWrite(6, board.HIGH);
		 } else {
			board.digitalWrite(6, board.LOW);
		 }
		break;
		case 3:
		 console.log("third");
		 if (data.state==true) {
		 	board.digitalWrite(5, board.HIGH);
		 } else {
			board.digitalWrite(5, board.LOW);
		 }
		break;
		case 4:
		 console.log("fourth");
		 if (data.state==true) {
		 	board.digitalWrite(4, board.HIGH);
		 } else {
			board.digitalWrite(4, board.LOW);
		 }
		break;
	
	}
	
  });
});

