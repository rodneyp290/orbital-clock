var Planet = function(canvas, radius, orbit_radius, orbit_time,
                      orbit_origin_func, colour) {
  this.canvas = canvas;
  this.radius = radius;
  this.orbit_radius = orbit_radius;
  this.orbit_time = orbit_time;
  this.orbit_origin_func = orbit_origin_func;
  this.colour = colour;
}

Planet.prototype.getPosition = function() {
    var full_time = new Date();
    var midnight = new Date(full_time.getFullYear(), full_time.getMonth(),
                        full_time.getDate());
    var ms_past_midnight = full_time - midnight;
    var orbit_angle = Math.PI/2 + (2 * Math.PI
                   - ( (ms_past_midnight % this.orbit_time)/ this.orbit_time * 2 * Math.PI));
    var orbit_origin = this.orbit_origin_func();

    var x = orbit_origin.x + Math.sin(orbit_angle) * this.orbit_radius;
    var y = orbit_origin.y + Math.cos(orbit_angle) * this.orbit_radius;

    return { "x": x, "y": y};

}

Planet.prototype.draw = function() {
  pos= this.getPosition();
  context = this.canvas.getContext('2d');
  context.beginPath();
    context.arc(pos.x, pos.y, this.radius, 0, 2 * Math.PI, true);
    context.fillStyle = this.colour;
    context.fill();
  context.closePath();

}
