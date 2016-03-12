$(document).ready(function(){

  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;

  var canvas = $('#clock')[0]
  var context = canvas.getContext('2d');

  var center = {
    x: canvas.width/2,
    y: canvas.height/2
  };

  var sun = new Planet(
    canvas, 60, 0, DAY,
    function() {return center;}, "#EEAA00"
  );

  var earth = new Planet(
    canvas, 20, 140, DAY/2,
    function() {return sun.getPosition();}, "#00EE88"
  );

  var moon = new Planet(
    canvas, 6, 40, HOUR,
    function() { return earth.getPosition(); }, "#AAAAAA"
  )

  var satelite = new Planet(
    canvas, 2, 25, MINUTE,
    function() { return earth.getPosition();}, "#AAAA00"
  )

  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    sun.draw();
    earth.draw();
    moon.draw();
    satelite.draw();
  }

  function loop() {
    draw();
  }

  setInterval(loop, 10);

});
