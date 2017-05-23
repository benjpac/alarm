var Weather = require('./../js/weather.js').weatherModule;

var displayWeather = function(city, weatherData, number) {
  $('#showWeather' + number).append(
    '<h3>'  + city.charAt(0).toUpperCase() + city.slice(1) + '</h3>' +
    '<p> Humidity: ' + weatherData[0] + '% </p>' +
    '<p> Temp: ' + weatherData[2] + '°C/' + weatherData[3] + '°F</p>'
  );
};

$(document).ready(function() {
  var currentWeatherObject1 = new Weather();
  $('#weather-location1').click(function() {
    var city = $('#location1').val();
    $('#location1').val("");
    currentWeatherObject1.getWeather(city, displayWeather, 1);
  });
  var currentWeatherObject2 = new Weather();
  $('#weather-location2').click(function() {
    var city = $('#location2').val();
    $('#location2').val("");
    currentWeatherObject2.getWeather(city, displayWeather, 2);
  });
});
