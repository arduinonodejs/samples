/*
  Cambio de intensidad de un led según el valor
  proporcionado por una fotocélula.
*/

int photoSensor = 0; // Pin analogico para la fotoresistencia
int ledPin=11;    // Pin al que se conecta el LED
int valor;     //define una variable en la que haremos los cálculos
int min = 780;  //Variable de calibrado valor minimo.
int max = 940;  //Variable de calibrado valor maximo.

void setup()
{
pinMode( ledPin, OUTPUT ); // Establece el pin del LED como salida.
Serial.begin(9600);       // Establecemos la comunicacion serie a 9600 Baudios.
}

void loop()
{
valor = analogRead(photoSensor); //Leemos el valor de la fotocelula.
valor = map(valor, min, max, 0, 255); //Mapeamos el valor al rango 0-255.
valor = constrain(valor, 0, 255); //Evitamos valores fuera de rango.
analogWrite(ledPin, valor);  //Enviamos el valor analogico al pin 11.

Serial.println(valor);  //Enviamos el valor al puerto serie.

// Hacemos una pequeña pausa.

delay(100);
}
