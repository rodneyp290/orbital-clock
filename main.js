$(document).ready(function(){

  var canvas = $('#clock')[0]
  var context = canvas.getContext('2d');

  var center_x = canvas.width/2;
  var center_y = canvas.height/2;

  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
      context.arc(center_x, center_y, 100, 0, 2 * Math.PI, true);
      context.fillStyle = "#EEAA00";
      context.fill();
    context.closePath();
  }

  function loop() {
    draw();
  }

  setInterval(loop, 10);

});
