var database;
var engine,world;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const bodies = Matter.Bodies;
const Body = Matter.Body;

function setup(){
	createCanvas(800,600);

	database = firebase.database();

	engine = Engine.create();
	world = engine.world;

	ball = new Basketball(100,100,PI/3);

	ground = new Ground(width/2,500,width,30);

	hoop1 = new Ground(750,310,30,350);
	hoop2 = new Ground(705,200,60,10);
	hoop3 = new Ground(680,235,10,70);
	hoop4 = new Ground(645,265,60,10);
	hoop5 = new Ground(610,235,10,70);
	
	Engine.run(engine);
}

function draw(){
	background("black");

	ball.display();
	ground.display();
	hoop1.display(); 
	hoop2.display();
	hoop3.display();
	hoop4.display();
	hoop5.display();
	console.log(ball.body.position);

	if(keyWentDown("a")){
		Matter.Body.applyForce(ball.body,ball.body.position,{x : 100, y : -130});
	}
		
	drawSprites();
}