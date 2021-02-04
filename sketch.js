
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, groundObject;
var mango1, Stone;
var world,boy;
var slingShot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	Stone=new stone(235,420,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);	
	Engine.run(engine);

	slingShot = new Slingshot(Stone.body,{x:235,y:420});

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  
  treeObj.display();
  mango1.display();
  Stone.display();
  slingShot.display();

  groundObject.display();

  detectollision(Stone,mango1)
}

function mouseDragged(){
    Matter.Body.setPosition(Stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly()    
}

function detectollision(Stone, mango1){
	var distance=dist(Stone.body.position.x,Stone.body.position.y, mango1.body.position.x, mango1.body.position.y )
	  if(distance<=mango1.r+Stone.r){
		Matter.Body.setStatic(mango1.body,false)
	  }
}