
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(100,300,100);
	

	box2_part1 = createSprite(320,height,10,300)
	box2_part2 = createSprite(520,height,10,300)
	box2_part3 = createSprite(420,height,200,10)

	ground = new Ground(600,700,1200,20);





	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background("white");
  paper.display();
 
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:140,y:-605})
	}
}


