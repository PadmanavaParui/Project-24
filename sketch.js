const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var paper1, ground;
var  dustbin1, dustbin2, dustbin3; 

function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(100,660, 10);
    ground = new Ground(400,680,800,20);
    dustbin1 = new Dustbin(610,660, 100, 20);
    dustbin2 = new Dustbin(550,620,20,100);
    dustbin3 = new Dustbin(670,620,20,100)
    

    Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);  
  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 15,y: -15})
    }
  }



