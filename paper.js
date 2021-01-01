class paperClass {
	constructor() {
		var options = {
			'restitution': 0.4,
			'friction': 0.3,
            'density': 0.1
		}
		
		this.body = Bodies.circle(100, 50, 50, options);
		 
		this.image = loadImage("paper.png")
	
		World.add(userWorld, this.body);
	}
	display() {
		push();
		translate(this.body.position.x,  this.body.position.y);
		image(this.image, 0, 0, 50, 50)
		pop();
	}
	
}