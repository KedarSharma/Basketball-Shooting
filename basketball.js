class Basketball {
	constructor(x,y,angle){
		var options = {
			'density' : 1.2,
			'friction':0.5,
			'isStatic': false,
			'restitution': 0.5,
			'rotationSpeed': 10
		}
		this.radius = 25;
		this.body = Matter.Bodies.circle(x,y,this.radius,options);
		this.image = loadImage("images/Basketball.png");
		this.constraint = Matter.Constraint.create({
			length : 10,
			stiffness : 5,
			bodyA : this.body,
			pointB : {x : 200,y : 200}
		});
		Matter.Body.setAngle(this.body,angle);
		World.add(world,this.body);
		World.add(world,this.constraint)
	}

	display(){
		var pos = this.body.position;
		var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
		rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
	}
}