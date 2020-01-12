document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'interaction', 'dayGrid', 'timeGrid','bootstrap' ],
    themeSystem: 'bootstrap',
    defaultView: 'dayGridMonth',
    header:{
      left:'prev,next today',
      center:'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
        {
          title: 'Boxing',
          daysOfWeek: [3],
          startTime: '19:40:00'
        },
        {
          title: 'Sparring101',
          daysOfWeek: [4],
          startTime: '20:50:00',
        },
        {
          title: 'Muay Thai Kickboxing',
          daysOfWeek: [2,4],
          startTime: '19:40:00'
        },
        {
          title: 'Self Defense/Kali/Jeet Kune Do',
          daysOfWeek: [0],
          startTime: '10:00:00'
        },
        {
          title: 'Muay Thai Kickboxing',
          daysOfWeek: [0],
          startTime: '11:00:00'
        },
        {
          title: 'MMA 101',
          daysOfWeek: [0],
          startTime: '12:00:00'
        }
      ]
    });
  calendar.updateSize()
  calendar.render();
});
