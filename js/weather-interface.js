var Weather = require('./../js/weather.js').weatherModule;

var displayWeather = function(city, weatherData) {
  $('.showWeather').append(
    '<p> The humidity in ' + city + ' is ' + weatherData[0] + '% </p>' +
    '<p> The temperature of ' + city + ' is ' + weatherData[1] + ' Kelvins </p>' +
    '<p> The temperature of ' + city + ' is ' + weatherData[2] + '°C </p>' +
    '<p> The temperature of ' + city + ' is ' + weatherData[3] + '°F </p>'
  );

};

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayWeather);
  });
});
