const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ball_options ={
        restitution:1.0
     }

     ball=Bodies.rectangle(200,300,100,10,ball_options);
     World.add (world,ball);

    var object_options ={
        isStatic: true
    
    }

   object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);

   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
    rect(ball.position.x,object.position.y,50,50);
}
