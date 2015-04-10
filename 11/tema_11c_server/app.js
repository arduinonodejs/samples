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


var init_servo=0;

var five = require("johnny-five"),
    board, potentiometer, servo, scalingRange;
  
board = new five.Board();
   
board.on("ready", function() {
		  
	scalingRange = [0, 170];
		    
	servo = new five.Servo({
		pin: 9,
		range: scalingRange
	});
	  
	potentiometer = new five.Sensor({
		pin: "A2",
		freq: 2000
	});
	  
	potentiometer.on("read", function( err, value ) {
		board.emit('value', value);
	});
	  
});

io.on('connection', function (socket) {
  
	socket.emit('init', { value: init_servo });
		  
	socket.on('from_client', function (data) {

		//console.log("from_client: "+data.value);
		init_servo=data.value;
		servo.to(Math.floor(data.value));
		socket.broadcast.emit('from_server', data);

	});
	
	board.on('value', function(val){
		console.log("val: "+val);
		socket.emit('value', {val: val});
	});
		  		  
});
		


    





