var ArduinoFirmata = require('arduino-firmata');
var arduino = new ArduinoFirmata();

var port_arduino='/dev/ttyACM0';

arduino.connect(port_arduino);

arduino.on('connect', function(){

  console.log("board version"+arduino.boardVersion);
  // your-code-here
  
  var relays = [1, 2, 3 ,4];
    
    relays.forEach(function(ledPin) {
    	console.log( arduino.analogRead(ledPin) );
    });
});

