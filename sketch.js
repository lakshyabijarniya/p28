
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var ground,paper,bottomSide,rightSide,leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

    rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	paper= new Paper(100,300,10,{isStatic:true});
	ground=new Ground(600,580,1200,20,{isStatic:true});
	dustbin=new Dustbin(1000,560,170,20); 
    launcher=new Launcher(paper.body,{x:100,y:250});

}


function draw() {


   rectMode(CENTER);
   background("blue");
   Engine.update(engine);
   paper.display();
   ground.display();
   dustbin.display();
launcher.display();


}


function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}
