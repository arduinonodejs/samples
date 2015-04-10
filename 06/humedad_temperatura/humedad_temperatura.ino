/*
 Ejemplo de sketch para los sensores DHT.
 Written by ladyada, public domain.
*/

#include "DHT.h" //Incluimos la libreria que acabamos de instalar.

#define DHTPIN 2     // Definimos el pin digital 2 como de entrada.
#define DHTTYPE DHT11   // Establecemos el sensor de tipo DHT 11.


DHT dht(DHTPIN, DHTTYPE); //Creamos el objeto dht.

void setup() {
  Serial.begin(9600);
  
  //Inicializamos la libreria.
  dht.begin();
}

void loop() {
  //Llamamos a los metodos de lectura y almacenamos el valor en su
  //correspondiente variable.
  int h = dht.readHumidity();
  int t = dht.readTemperature();

  // Si los resultados son NaN (not a number), algo va mal.
  if (isnan(t) || isnan(h)) {
    Serial.println("Fallo de lectura del DHT");
  } else {
    //De lo contrario, imprimimos el valor por el puerto serie.
    Serial.print("Humedad: "); 
    Serial.print(h);
    Serial.print(" %\t");
    Serial.print("Temperatura: "); 
    Serial.print(t);
    Serial.println(" ºC");
    delay(3000); //Hacemos una pausa de 3 segs. entre cada lectura.
                //Se trata de un sensor lento. No bajar de este valor.
  }
}
