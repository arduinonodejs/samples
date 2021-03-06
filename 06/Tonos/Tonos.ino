//Sketch para hacer sonar un buzzer.

//El buzzer esta conectado al pin 9.
int buzzerPin = 9;

void setup() {
  pinMode(buzzerPin, OUTPUT);
}

void loop() {
  // Reproduce una nota en el pin 9
  // durante 150 ms.
  tone(buzzerPin, 440);
  delay(150);

  // Detiene la funcion buzzer.
  noTone(buzzerPin);
  
  // Reproduce otra nota durante 200 ms.
  tone(buzzerPin, 494);
  delay(200);
  
  // Detiene la funcion
  noTone(buzzerPin);  
  
  // Reproduce otra nota durante 300 ms.
  tone(buzzerPin, 523);
  delay(300);

}
