
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5,rope6,rope7,rope8,rope9,roof;

function preload() {
	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;
    
	bob1 = new Bob(300,410); 
	bob2 = new Bob(400,410);
	bob3 = new Bob(500,410);
	bob4 = new Bob(600,410);
	bob5 = new Bob(700,410);

	roof = new Roof(520,50,500,30); 
	 
	rope1 = new Rope(bob1.body,{x:320,y:50});
	rope2 = new Rope(bob2.body,{x:420,y:50});
	rope3 = new Rope(bob3.body,{x:520,y:50});
	rope4 = new Rope(bob4.body,{x:620,y:50});
	rope5 = new Rope(bob5.body,{x:720,y:50});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  drawSprites();
}

function keyPressed() {
	if(keyDown(UP_ARROW)) {
		Matter.Body.setPosition(bob1.body, {x: 100, y: 100});
	}
}