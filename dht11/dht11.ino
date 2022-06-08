#include "DHT.h"
#define Type DHT11

//
int sensorPin = 2;
DHT objetDHT11(sensorPin, Type);
float humidite;
float tempC;
int setime = 500;
int delayTime = 1000;


void setup() {

 Serial.begin(115200);
objetDHT11.begin();
delay(setime);

}
void loop() {
humidite = objetDHT11.readHumidity();
tempC = objetDHT11.readTemperature();


Serial.print(tempC);
Serial.println(humidite);

delay(500);
}
//sous-programme

void ledOn(int numLed){
  digitalWrite(numLed, HIGH);
  }
 void ledOff(int numLed){
  digitalWrite(numLed, LOW);
  }
