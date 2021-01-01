//var paper, paper1;
var dustbinClass;
var TrashCanImg;
var ground;
var paper1;
var side1, side2, base;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var userEngine, userWorld;




function preload() {
	TrashCanImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	userEngine = Engine.create();
	userWorld = userEngine.world;
	//Create the Bodies Here.
	paper1 = new paperClass();
	
	ground = Bodies.rectangle(400, 680, width, 20, {isStatic:true});
	side1 = Bodies.rectangle(550, 600, 20, 100, {isStatic:true})
	side2 = Bodies.rectangle(700, 600, 20, 100, {isStatic:true})
	base = Bodies.rectangle(625, 660, 150, 20, {isStatic:true});
	World.add(userWorld, ground);
	World.add(userWorld, side1);
	World.add(userWorld, side2);
	World.add(userWorld, base);
	console.log(ground);
	Engine.run(userEngine);
}


function draw() {
	background(255);
	rectMode(CENTER);
	console.log(paper1.y);


	rect(ground.position.x, ground.position.y, width, 20);
	rect(side1.position.x, side1.position.y, 20, 100)
	rect(side2.position.x, side2.position.y, 20, 100);
	rect(base.position.x, base.position.y, 150, 20);
	
	
	image(TrashCanImg, 525, 470, 200, 200);
	paper1.display();
	drawSprites();
}

function keyPressed(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:20, y:150})
	}
}

