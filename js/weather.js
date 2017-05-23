var apiKey = require('./../.env').apiKey;

Weather = function() {
  this.getWeather = function(city, displayWeather) {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      console.log(response)
      var humidity = response.main.humidity;
      var kelvins = response.main.temp.toFixed(0);
      var celsius = (kelvins -273.15).toFixed(0);
      var farenheit = (celsius * 9 / 5 + 32).toFixed(0);
      displayWeather(city, [humidity, kelvins, celsius, farenheit]);
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  };
};

exports.weatherModule = Weather;
