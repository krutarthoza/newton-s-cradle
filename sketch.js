const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
 
var ground1,ground2;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5

function preload() {

}

function setup(){
  var canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  bobDiameter=40;

    var startbobPositionX=width/2;
    var startbobPositionY=height/4+200;

  bobObject1 = new Ball(startbobPositionX-bobDiameter*2,startbobPositionY,bobDiameter);

  bobObject2 = new Ball(startbobPositionX-bobDiameter,startbobPositionY,bobDiameter);

  bobObject3 = new Ball(startbobPositionX,startbobPositionY,bobDiameter);

  bobObject4 = new Ball(startbobPositionX+bobDiameter,startbobPositionY,bobDiameter);

  bobObject5 = new Ball(startbobPositionX+bobDiameter*2,startbobPositionY,bobDiameter);

  roofObject= new Ground(600,270,100,20)

  rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
    
  rope2=new Rope(bobOject2.body,roofObject.body,-bobDiameter*1,0)

  rope3=new Rope(bobObject3,body,roofObject.body,0,0)

  rope4=new Rope(bobObject4,body,roofObject.body.bobDiameter*1, 0)

  rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

  ground1= new Ground(600,550,1200,20);

 

  Engine.run(engine);

  
}

function draw(){
  background(0);
  Engine.update(engine);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ground.display();

  drawSprites()
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

