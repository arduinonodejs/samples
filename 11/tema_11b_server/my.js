var SerialPort = require("serialport").SerialPort

REPORT_VERSION = 0xF9;

//console.log("REPORT_VERSION: "+REPORT_VERSION);

var port_arduino='/dev/ttyACM0';

var serialPort = new SerialPort(port_arduino, {
  baudrate: 9600
});

serialPort.on("open", function () {
  console.log('open');
  //serialPort.on('data', function(data) {
   // console.log('data received: ' + data);
  //});
  serialPort.write(REPORT_VERSION, function(err, results) {
    if (err) {
    	console.log('err ' + err);
    }
    console.log('results ' + results);
  });
});