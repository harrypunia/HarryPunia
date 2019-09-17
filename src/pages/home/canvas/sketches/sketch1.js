class S1 {
  constructor(sk) {
    this.particles = [];
    for (let i = 0; i < 200; i++) {
      this.particles[i] = new Particle(sk,200, sk.random(0.001, 0.005));
    }
  }

  draw(sk, colors) {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].show(sk, colors);
    }
  }
}

class Particle {
  constructor(sk, r, speed) {
    this.center = {x: sk.width / 1.8, y: sk.height / 2};
    this.offsetSize = 100;
    this.xOff = sk.random(100);
    this.rIn = r;
    this.r = r;
    this.a = sk.random(10);
    this.speed = speed;
    this.size = 5;
    this.once = true;
  }

  show(sk, colors) {
    sk.noFill();
    this.update(sk);
    this.scale(sk, colors);
    this.once ? this.follow(sk) : 0;
    this.shrink(sk);
    this.offset < 0 ? sk.stroke(sk.color(colors.secondary), sk.map(this.offsetSize + this.offset, 0, 100, 20, 80)) : sk.stroke(sk.color(colors.secondary), sk.map(this.offsetSize - this.offset, 0, 100, 20, 80));
    sk.ellipse(this.x, this.y, this.size, this.size);
  }

  update(sk) {
    this.offset = sk.map(sk.noise(this.xOff), 0, 1, -this.offsetSize, this.offsetSize);
    this.x = this.r * Math.sin(this.a) + this.center.x;
    this.y = this.r * Math.cos(this.a) + this.center.y;
    this.a += this.speed;
    this.xOff += 0.005;
  }

  scale(sk, colors) {
    const gap = sk.dist(sk.mouseX, sk.mouseY, this.x, this.y);
    if (gap < 50) {
      this.size = sk.map(gap, 0, 50, 20, 5);
      this.offset < 0 ? sk.fill(sk.color(colors.secondary), sk.map(this.offsetSize + this.offset, 0, 100, 0, 50)) : sk.fill(sk.color(colors.secondary), sk.map(this.offsetSize - this.offset, 0, 100, 0, 50));
    } else {
      this.size = 5;
    }
  }

  follow(sk) {
    this.center.x = sk.lerp(this.center.x, sk.map(sk.mouseX, 0, sk.width, sk.width / 1.8 - 50, sk.width / 1.8, +50), 0.05);
    this.center.y = sk.lerp(this.center.y, sk.map(sk.mouseY, 0, sk.height, sk.height / 2 - 50, sk.height / 2, +50), 0.05);
  }

  shrink(sk) {
    const gap = sk.dist(sk.mouseX, sk.mouseY, sk.width / 1.8, sk.height / 2);
    if (gap < 100) {
      this.r = sk.lerp(this.r, this.rIn / 1.2 + this.offset, 0.05);
    } else {
      this.r = sk.lerp(this.r, this.rIn + this.offset, 0.05);
    }
  }
}

export default S1;