/*
  Cambia la intensidad de un led mediante el movimiento
  de un potenciómetro.
*/

int ledPin = 9;      // LED conectado al pin digital 9
int analogPin = 0;   // potenciómetro conectado al pin A0
int val = 0;         // variable en el que se almacena el dato leído

void setup()
{
  pinMode(ledPin, OUTPUT);   // establecemos ledPin como output
}

void loop()
{
  val = analogRead(analogPin);   // lee la tensión en el pin A0
  /*
  // los valores de analogRead van desde 0 a 1023 y los valores de 
  analogWrite van desde 0 a 255, por eso ajustamos el ciclo de trabajo
  a el valor leído dividido por 4.
  */
  analogWrite(ledPin, val / 4);  
}

