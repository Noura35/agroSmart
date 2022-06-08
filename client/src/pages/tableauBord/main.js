const socket = io();

const temperatureDisplay = document.getElementById('temperature');
const humidityDisplay = document.getElementById('humidity');


socket.on('temp', function (data) {
  console.log(data);
  temperature.innerHTML = `${data}°C`;
});

socket.on('humi', function (data) {
  console.log(data);
  humidity.innerHTML = `${data}%`;
});
