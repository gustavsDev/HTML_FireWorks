let fireworks = [];
let particles = [];

function FireRocket() {
	fireworks.push(new Firework(mouseX, height, 0, 0, color(random(255), 255, 255)));
}

function Explode(x, y, color) {
	for(let i = 0; i < TWO_PI; i += 0.1) {
		particles.push(new Particle(x, y, cos(i), sin(i), color));	
	}
}

function setup() {
	createCanvas(640, 460);
	colorMode(HSB);
}

function draw() {
	if(mouseIsPressed) FireRocket();

	background(0);
	for(let i = 0; i < particles.length; i++) {
		let particle = particles[i];
		if(particle.dead) {
			particles.splice(i, 1);
			continue;
		}

		particle.update();
		particle.render();
	}

	for(let i = 0; i < fireworks.length; i++) {
		let firework = fireworks[i];
		if(firework.exploded) {
			Explode(firework.pos.x, firework.pos.y, firework.color);
			fireworks.splice(i, 1);
			continue;
		}
		firework.update();
		firework.render();
	}
	stroke(255);
	strokeWeight(4);
	line(mouseX, height, mouseX, height - 10);
}

function mousePressed() {
	FireRocket();
}
