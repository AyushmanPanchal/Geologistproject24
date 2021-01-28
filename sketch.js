
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var enigne, world
var hammer;
var rubber;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Plane(600,height,1200,20)
	hammer = new Hammer(10, 100)
	rubber = new Rubber(900, 450, 70)
	stone = new Stone(700, 320, 100, 100)


	Engine.run(engine);
  
}


function draw() {
  background("skyblue");
  Engine.update(engine);
  hammer.display();
  plane.display();
  rubber.display();
  stone.display();
  
 
}



