export class Particle {
	static particles: Particle[] = [];

	x: number;
	y: number;
	age: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
		this.age = 0;
	}
}

export const canvas_width = 400;
export const canvas_height = 300;

function RandomFromZeroTo(max: number): number {
	return Math.floor(Math.random() * max);
}

/**
 * init particle system;
 */
export function particles_init(count: number) {}

/**
 * update the particle simulation
 * move the existing particles down y ammount
 * add a new particle every x frames or so
 */

export function particles_update(frame: number) {
	const everynthframe = 10;
	const yspeed = 10;
	const max_age = 82;

	// remove old parts
	Particle.particles = Particle.particles.filter(
		(p) => p.y != canvas_height && p.age != max_age
	);

	// move particles downward
	Particle.particles.forEach((p) => {
		p.y += yspeed;
		p.age += 1;
	});

	// create new ones
	if (0 == frame % everynthframe) {
		Particle.particles.push(
			new Particle(RandomFromZeroTo(canvas_width), 0)
		);
	}
}

/**
 * Render particles
 */
export function particles_render(ctx: CanvasRenderingContext2D) {
	ctx.strokeStyle = 'white';
	ctx.lineWidth = 3;

	Particle.particles.forEach((p) => {
		ctx.beginPath();
		ctx.moveTo(p.x, p.y);
		ctx.lineTo(p.x, p.y + 4);
		ctx.stroke();
	});
}
