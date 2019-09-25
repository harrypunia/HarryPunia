class Particle {
  constructor(s) {
    this.s = s;
    this.pos = s.createVector(s.random(s.width), s.random(s.height));
    this.vel = s.createVector(s.random(-.5, .5), s.random(-.5, .5));
  }

  draw() {
    this.s.fill(10, 100);
    this.s.noStroke();
    this.s.ellipse(this.pos.x, this.pos.y, 2, 2);
    this.update();
  }

  update() {
    this.pos.add(this.vel);
    this.collission();
  }

  collission() {
    this.pos.x <= 0 && (this.pos.x = 0);
    this.pos.x >= this.s.width && (this.pos.x = this.s.width);
    this.pos.y <= 0 && (this.pos.y = 0);
    this.pos.y >= this.s.height && (this.pos.y = this.s.height);
    (this.pos.x <= 0 || this.pos.x >= this.s.width) && (this.vel.x *= -1);
    (this.pos.y <= 0 || this.pos.y >= this.s.height) && (this.vel.y *= -1);
  }

  inRange(neighbour) {
    return this.s.dist(this.pos.x, this.pos.y, neighbour.pos.x, neighbour.pos.y) < 200;
  }

  static twoInRange(particle, neighbours) {
    const connections = [];
    for (let i = 0; i < neighbours.length; i++) {
      if (connections.length < 2) {
        if (particle.inRange(neighbours[i])) connections.push(neighbours[i]);
      } else break;
    }
    if (connections.length === 2) return connections;
    return false;
  }
}

export default Particle;