/*
  Sketch para medir la temperatura
  con el sensor de temperatura LM35
  e imprimirla por el puerto serie.
*/

float temp;  //Variable donde almacenaremos el valor medido.
int tempPin = 0; // Definimos la entrada en pin A0

void setup()
{
    // Abre puerto serial y lo configura a 9600 bps
    Serial.begin(9600);
}

void loop()
{
    // Leemos el valor del sensor.
    temp = analogRead(tempPin); 

    //Calcula la temperatura usando como referencia 5v.
    temp = (5.0 * temp * 100.0)/1024.0; 

    // Envia el dato al puerto serie.
    Serial.print(temp);
    Serial.print(" grados Celsius\n");

    // Una pequeña pausa hasta la siguiente lectura.
    delay(3000);
}
