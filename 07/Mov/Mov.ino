/*
  Sketch que enciende un led cuando se detecta
   movimiento.
*/

int motionPin = 8; //Pin de conexion del sensor.
int lightPin = 2; //Pin de conexion del led.

void setup(){
  pinMode (motionPin, INPUT);
  pinMode (lightPin, OUTPUT);
  delay(3000); //Esperamos 3 segs. para que el sensor se calibre.
}

void loop (){
  digitalWrite(lightPin, LOW);
  delay(1000);
  int sensorValue = digitalRead(motionPin); //Hacemos una lectura del sensor.

  if (sensorValue == LOW) //Movimiento detectado.
  {
    digitalWrite(lightPin,HIGH); //Encendemos led.
    delay(1000); //Mantenemos el led encendido 1 segundo.
  }
}



