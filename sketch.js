var star, starBody;
var fairy , fairyVoice;
var starImg, fairyImg, bgImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	bgImg = loadImage("images/starNight.png");
	starImg = loadImage("images/star.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
 fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
}
function setup() {
	createCanvas(8030, 750);
	engine = Engine.create();
	world = engine.world;
	fairy = createSprite(290, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	Engine.run(engine);
}
function draw() {
  background(bgImg);
  drawSprites();
  keyPressed();
}
function keyPressed() {
	if(keyDown("left_arrow")){
		fairy.velocityX=-5;
	}
	if(keyDown("right_arrow")){
		fairy.x=fairy.x+5;
	}
	if(keyDown("down_arrow")){
		star.velocityY=5;
	}
	
}
