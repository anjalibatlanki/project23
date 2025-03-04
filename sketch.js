var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	box1Sprite = createSprite(width/2, 655, 70, 10);
	box1Sprite.shapeColor= "red";
	box2Sprite = createSprite(360, 625, 10,70);
    box2Sprite.shapeColor= "red";
	box3Sprite = createSprite(435, 625,10,70);
    box3Sprite.shapeColor = "red";
	
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2, 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    box1 = Bodies.rectangle(width/2, 655, 70, 10, {isStatic: true});
	World.add(world, box1);

	box2 = Bodies.rectangle(400, 655, 70, 10,{isStatic: true});
	World.add(world, box2);

	box3 = Bodies.rectangle(400, 655, 70, 10, {isStatic: true});
	World.add(world, box3);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
 drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
  Matter.Body.setStatic(packageBody,false);
  
  }
}


