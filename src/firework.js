class Firework {
	constructor(x, y, velx, vely, color) {
		this.pos = createVector(x, y);
		this.vel = createVector(velx, vely);
		this.color = color;
		this.life = 0;
		this.exploded = false;

		this.vel.normalize().mult(3);
	}

	render() {
		noStroke();
		fill(hue(this.color), saturation(this.color), brightness(this.color)/2);
		ellipse(this.pos.x-1.5, this.pos.y-2.5, 3, 5);
	}

	update() {
		if(this.exploded) return;
		if(this.life > 100) this.exploded = true;
		this.life++;
		this.vel.rotate(random(-0.05, 0.05));
		this.vel.y -= 0.06;
		this.pos.add(this.vel);
	}
}
