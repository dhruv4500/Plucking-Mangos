
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject,sling;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango9,mango10,mango11;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,60,30);
	mango2 = new Mango(899,180,20);
	mango3 = new Mango(1150,100,10);
	mango4 = new Mango(1050,90	,30);
	mango5 = new Mango(1050,250,30);
	mango6 = new Mango(960,162,30);
	mango7 = new Mango(1207,200,30);
	mango8 = new Mango(1103,73,40);
	mango9 = new Mango(1106,156,15);
	mango10 = new Mango(990,230,20);
	mango11 = new Mango(1150,239,35);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stoneObj=new Stone(270,445,50,50);
	sling=new Sling(stoneObj.body,{x:234,y:419});
	
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
	text("Press Space For Another Chance",287,111,textSize(30));

  image(boy ,200,340,200,300);
  
  console.log(mouseX+","+mouseY)

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  stoneObj.display()
  sling.display();

  groundObject.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  detectCollision(stoneObj,mango11);
}


function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}
function  mouseReleased(){
	sling.fly();
}
function detectCollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position

	var distanse=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distanse<=Lmango.r+Lstone.r){
			Matter.Body.setStatic(Lmango.body,false);
		}
}
function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body,{x:270,y:445})
        sling.attach(stoneObj.body);
	}
}