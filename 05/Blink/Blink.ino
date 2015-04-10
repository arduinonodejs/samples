/*
  Blink
  Enciende y apaga un led a intervalos de 1 segundo.
 */
 
// Pin 13 donde conectamos el led.

int led = 13;

// La funcion setup se ejecuta solo una vez.
void setup() {  
  // Inicializa el pin digital como salida.  
  pinMode(led, OUTPUT);     
}

// La funcion loop se ejecuta en bucle constantemente:
void loop() {
  digitalWrite(led, HIGH);   // enciende el LED (HIGH es el nivel de voltaje)
  delay(1000);               // espera 1 segundo.
  digitalWrite(led, LOW);    // apaga el LED (voltaje LOW).
  delay(1000);               // espera otro segundo.
}
