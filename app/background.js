import Matter from 'matter-js';



export default class Bubbles {
	constructor (options) {
		this.options = {
			canvasSelector: '',				// to find <canvas> in DOM to draw on
			radiusRange: [75, 150],			// random range of body radii
			xVarianceRange: [-1, 1],	// random range of x velocity scaling on bodies
			yVarianceRange: [0.5, 1.5],		// random range of y velocity scaling on bodies
			airFriction: 0.04,				// air friction of bodies
			opacity: 1,						// opacity of bodies
			collisions: false,				// do bodies collide or pass through
			scrollVelocity: 2.5,			// scaling of scroll delta to velocity applied to bodies
			pixelsPerBody: 50000,			// viewport pixels required for each body added

			// colors to cycle through to fill bodies
			colors: ['#2cbcc9'],
			...options
		};

		this.scrollDelay = 100;
		this.resizeDelay = 400;
		this.lastOffset  = 0;
	}

	init = () => {

		const viewportWidth = document.documentElement.clientWidth;
		const viewportHeight = document.documentElement.clientHeight;

		this.scrollTimeout = null;
		this.resizeTimeout = null;
	
		// engine
		this.engine = Matter.Engine.create();
		this.engine.world.gravity.y = 0;
	
		// render
		this.render = Matter.Render.create({
			canvas: document.querySelector(this.options.canvasSelector),
			engine: this.engine,
			options: {
				width: viewportWidth,
				height: viewportHeight,
				wireframes: false,
				background: 'transparent'
			}
		});
		Matter.Render.run(this.render);
	
		// runner
		this.runner = Matter.Runner.create();
		Matter.Runner.run(this.runner, this.engine);
	
		// bodies
		this.bodies = [];
		let totalBodies = Math.round(viewportWidth * viewportHeight / this.options.pixelsPerBody);
		for (let i = 0; i <= totalBodies; i++) {
			let body = this.createBody(viewportWidth, viewportHeight);
			this.bodies.push(body);
		}
		Matter.World.add(this.engine.world, this.bodies);
	}

	shutdown = () => {
		Matter.Engine.clear(this.engine);
		Matter.Render.stop(this.render);
		Matter.Runner.stop(this.runner);

		window.removeEventListener('resize', this.onResizeThrottled);
	}

	randomize = (range) => {
		let [min, max] = range;
		return Math.random() * (max - min) + min;
	}
	
	// create body with some random parameters
	createBody = (viewportWidth, viewportHeight) => {
		const x = this.randomize([0, viewportWidth]);
		const y = this.randomize([0, viewportHeight]);
		const radius = this.randomize(this.options.radiusRange);
		const color = this.options.colors[this.bodies.length % this.options.colors.length];
	
		return Matter.Bodies.circle(x, y, radius, {
			render: {
				fillStyle: color,
				opacity: this.options.opacity
			},
			frictionAir: this.options.airFriction,
			collisionFilter: {
				group: this.options.collisions ? 1 : -1
			},
			plugin: {
				wrap: {
					min: { x: 0, y: 0 },
					max: { x: viewportWidth, y: viewportHeight }
				}
			}
		});
	}

	onScrollThrottled = (currentSlide) => {
        console.log('scrolled');
		if (!this.scrollTimeout) {
			this.scrollTimeout = setTimeout(this.onScroll(currentSlide), this.scrollDelay);
		}
	}

	onScroll = (currentSlide) => {
		return () => {
			this.scrollTimeout = null;

			const delta = (this.lastOffset - currentSlide) * this.options.scrollVelocity;
			this.bodies.forEach((body) => {
				Matter.Body.setVelocity(body, {
					x: body.velocity.x + delta * this.randomize(this.options.xVarianceRange),
					y: body.velocity.y + delta * this.randomize(this.options.yVarianceRange)
				});
			});
		
			this.lastOffset = currentSlide;
		}
        	
	}

	onResizeThrottled = () => {
		if (!this.resizeTimeout) {
			this.resizeTimeout = setTimeout(this.onResize.bind(this), this.resizeDelay);
		}
	}

	onResize = () => {
		this.shutdown();
		this.init();
	}
}