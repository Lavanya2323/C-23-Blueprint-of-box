const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box1;
var box2;
var ground;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);

  var ground_options = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myWorld,ground);
}

function draw() {
  background("darkorange");  
 
  Engine.update(myEngine);
  ellipseMode(RADIUS);
  noStroke();
  box1.display();
  box2.display();
  fill("darkgreen");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  //console.log(box.position.x);
  //console.log(box.position.y);
}