import Particle from "./Particle";

class S1 {
  constructor(sk) {
    this.s = sk;
    this.particles = [];
    for (let i = 0; i < 100; i++) {
      this.particles[i] = new Particle(sk);
    }
  }

  draw() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].draw();
      const neighbours = [...this.particles];
      const inRange = Particle.twoInRange(this.particles[i], neighbours);
      if (inRange) {
        this.s.fill(0, 2);
        this.s.stroke(0, 2);
        this.triangle(this.particles[i].pos, inRange[0].pos, inRange[1].pos);
      }
    }
  }

  triangle(p1, p2, p3) {
    this.s.beginShape();
    this.s.vertex(p1.x, p1.y);
    this.s.vertex(p2.x, p2.y);
    this.s.vertex(p3.x, p3.y);
    this.s.endShape(this.s.CLOSE);
  }
}

export default S1;