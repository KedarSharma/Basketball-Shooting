class Ground {
	constructor(x,y,w,h){
		var properties = {
			"isStatic" : true
		}
		this.width = w;
		this.height = h;
		this.ground = Matter.Bodies.rectangle(x,y,this.width,this.height,properties);
		World.add(world,this.ground);
	}

	display(){
		var pos = this.ground.position;
		push();
		rectMode(CENTER);
		translate(pos.x,pos.y);
		fill(255);
		rect(0,0,this.width,this.height);
		pop();
	}
}