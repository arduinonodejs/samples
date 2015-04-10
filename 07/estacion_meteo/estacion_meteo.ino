#include <Wire.h>
#include <LiquidCrystal_I2C.h> //Librerias para el manejo del LCD.
#include "DHT.h" //Libreria para el sensor de humedad.

LiquidCrystal_I2C lcd(0x27, 2, 1, 0, 4, 5, 6, 7, 3, POSITIVE); // Addr, En, Rw, Rs, d4, d5, d6, d7, backlighpin, polarity

#define DHTPIN 7
#define DHTTYPE DHT11
float temp;
int tempPin = 0;

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  lcd.begin(20, 4); //Inicializamos el LCD (20 filas x 4 columnas).
  dht.begin();
}

void loop() {
  int h = dht.readHumidity();
  temp = analogRead(tempPin);
  temp = (5.0 * temp * 100.0)/1024.0;
  
  if (isnan(h)) {
    lcd.setCursor(0, 0); //Situamos el cursor en la fila 0 y columna 0.
    lcd.print("Fallo de lectura"); //Imprimimos el mensaje en el LCD.
    lcd.setCursor(0, 1);  //Acabamos el mensaje en la siguiente fila.
    lcd.print("del DHT");
  } 
  else {
    lcd.setCursor(0, 0);
    lcd.print("Humedad: ");
    lcd.setCursor(9, 0); 
    lcd.print(h);
    lcd.setCursor(11, 0);
    lcd.print("%");
    lcd.setCursor(0, 1);
    lcd.print("Temp: ");
    lcd.setCursor(6, 1); 
    lcd.print(temp);
    lcd.setCursor(11, 1);
    lcd.print(char(223)); //Imprime el simbolo de grados.
    delay(3000);
  }
}

