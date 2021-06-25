class Hexa {
    constructor(x, y, width, height, angle) {
      var options = { 
        density: 0.5, 
        };
  
      this.body = Bodies.circle(x, y, width, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }
  