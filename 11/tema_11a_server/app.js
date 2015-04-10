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

async = require("async");


var five = require("johnny-five"),
  
  board, lcd;
  
  board = new five.Board();



async.series([
    function(callback) { 
    
    	board.on("ready", function() {

		  lcd = new five.LCD({
		    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
		    // Arduino pin # 12  11  5   4   3   2
		    pins: [12, 11, 5, 4, 3, 2],
		    rows: 2,
		    cols: 16
		
		    // Options:
		    // bitMode: 4 or 8, defaults to 4
		    // lines: number of lines, defaults to 2
		    // dots: matrix dimensions, defaults to "5x8"
		  });
		  
		  button = new five.Button(6);
	  
		  callback(null, null);
	  
	  });

    
    },
    
    function(callback) { 
    
    	io.on('connection', function (socket) {
  
		  socket.emit('init', { server: 'Welcome to server' });
		  
		  socket.on('from_client', function (data) {
		 
		     
		     lcd.clear().print(data.line1);
		     console.log('line1: '+data.line1);
		     
		     lcd.cursor(1, 0);
		     console.log('line2: '+data.line2);
		     lcd.print(data.line2);
				
			
		  });
		  
		  
		  
		  button.on("down", function() {
		    socket.emit('warning', { data: 1 });
		  });
		  
		  
		});
		
		callback(null, null);
    
    }],
    
    function(err, results) { 
        console.log("End");
    }
  );


    





