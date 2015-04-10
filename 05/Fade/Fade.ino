/*
 
 Ejemplo de uso de la funcion analogWrite() para conseguir
 un efecto "fade" en un led conectado al pin 9.
 
 */

int led = 9;           // pin al que conectamos el led.
int brightness = 0;    // brillo del led.
int fadeAmount = 5;    // numero de pasos para el efecto fade.

// Funcion que solo se ejecutara 1 vez:
void setup()  { 
  pinMode(led, OUTPUT); //declaramos el pin 9 como salida.
} 

// funcion que se ejecutara en bucle una y otra vez:
void loop()  { 
 
  analogWrite(led, brightness);  //Establece el brillo del pin 9.  

  //Para cada bucle el brillo se incrementara en pasos de 5
  brightness = brightness + fadeAmount;

  //Invierte la direccion del efecto fading al llegar al final:
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ; 
  }     
  // Esperamos 30 milisegundos para apreciar el efecto:    
  delay(30);                            
}

