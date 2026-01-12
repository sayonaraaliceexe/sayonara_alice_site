
const canvas = document.getElementById('touch-effect');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 6 + 2;
    this.opacity = 1;
    this.life = 0;
    this.angle = Math.random() * 2 * Math.PI;
    this.speed = Math.random() * 2 + 1;
  }
  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.life += 0.02;
    this.opacity = Math.max(0, 1 - this.life);
  }
  draw() {
    ctx.fillStyle = `rgba(0, 174, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function spawnParticles(x, y) {
  for (let i = 0; i < 20; i++) {
    particles.push(new Particle(x, y));
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.update();
    p.draw();
    if (p.opacity <= 0) particles.splice(i, 1);
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener('touchstart', e => {
  for (let touch of e.touches) {
    spawnParticles(touch.clientX, touch.clientY);
  }
});
