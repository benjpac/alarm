var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {
  setInterval(function() {
    $('#current-time').text(moment().format("H:mm:ss a"));
  }, 1000 );

  $('#alarm-form').submit(function(event) {
    event.preventDefault();
    var alarmTime = $('#set-alarm').val();
    var newAlarm = new Alarm(alarmTime);
    setInterval(function() {
      if (newAlarm.checkAlarm(moment().format("H:mm"))) {
        alert('alarm');
      }
    }, 1000 );
  })
});
