//Movimiento de un servo según valor de un potenciómetro.

#include <Servo.h> //Incluimos la libreria servo.

Servo myservo; //Creamos el objeto servo.

int potPin = 0;   // potenciómetro conectado al pin A0
int valPot = 0;   //Valor del potenciometro.

void setup()
{
  myservo.attach(9); //Configuramos el servo en el pin 9.
}

void loop()
{
  valPot = analogRead(potPin); //Leemos el valor del potenciometro.
  valPot = map(valPot, 0, 1023, 0, 180); //Mapeamos el valor al rango 0-180.
  valPot = constrain(valPot, 0, 180); //Evitamos valores fuera de rango.

  myservo.write(valPot); //Movemos el servo a la posicion que marca el potenciometro.
}

