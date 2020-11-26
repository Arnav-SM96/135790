
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b2,b3,b1;
var bb2,bb3,bb1;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);

	bb1=Bodies.rectangle(1380,650,250,40,{isStatic:true});
	b1=createSprite(1380,650,250,40);
	b1.shapeColor=color(225,0,0);

	bb2=Bodies.rectangle(1260,560,40,200,{isStatic:true});
	b2=createSprite(1260,560,40,200);
	b2.shapeColor=color(225,0,0);

	bb3=Bodies.rectangle(1500,560,40,200,{isStatic:true});
	b3=createSprite(1500,560,40,200);
	b3.shapeColor=color(225,0,0);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	

	engine = Engine.create();
	world = engine.world;

	ball=new Paper(200,200,5);
	ball.shapeColor=color(225,0,0);
	World.add(world, ball);
	World.add(world, bb1);
	World.add(world, bb2);
	World.add(world, bb3);
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gold");
  Engine.update(engine);
  ball.display();
  drawSprites();
  keyPressed();
}

function keyPressed() {
	if (keyWentDown ( UP_ARROW)) {
	   
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:5.8,y:-5.7});
	   
	 }
   }

