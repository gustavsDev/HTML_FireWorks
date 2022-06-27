class Particle {
	constructor(x, y, velx, vely, color) {
		this.pos = createVector(x, y);
		this.vel = createVector(velx, vely);
		this.color = color;
		this.life = 0;
		this.dead = false;
		this.max_life = round(random(20, 100));
		this.vel.normalize().mult(random(1, 5));
	}

	render() {
		strokeWeight(map(this.life, 0, this.max_life, 3, 0));
		stroke(this.color);
		point(this.pos.x, this.pos.y);
	}

	update() {
		if(this.dead) return;
		this.life++;
		if(this.life > this.max_life) this.dead = true;
		this.vel.y += 0.05;
		this.pos.add(this.vel);
	}
}
