
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,crumbledPaper;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	crumbledPaper =new Paper (500,500,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  crumbledPaper.display();
  dustbinObj.display();
  

}

function keyPressed(){
	if (keyCode === UP_ARROW){
	
	   Matter.Body.applyForce(crumbledPaper.body,crumbledPaper.body.position,{x:4,y:-5}); 
	}
	}