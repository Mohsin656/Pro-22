var starImg,bgImg;
var star, starBody;
var fairy, fairyBody, fairyImg, sound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("starImage.png");
	bgImg = loadImage("starNight.png");
	fairyImg = loadAnimation("fairyImage1.png", "fairyImage2.png");
	sound = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

    sound.play();
	
    fairy = createSprite(80,500);
	fairy.addAnimation("moving", fairyImg);
	fairy.scale = 0.15;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.05;


	engine = Engine.create();
	world = engine.world;
	
	fairyBody = Bodies.circle(200, 500, 10 , {restitiution:0.5, isStatic:true});
	World.add(world, fairyBody);

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
}


function draw() {
  background(bgImg);

  Engine.update(engine);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  fairy.x= fairyBody.position.x
  fairy.y= fairyBody.position.y


    if(star.y > 460 && starBody.position.y > 460) {
	   Matter.Body.setStatic(starBody, true);	
	   Matter.Body.setStatic(fairyBody, true);
    }
	
	
  drawSprites();
  keyPressed();  
}

function keyPressed() {
if(starBody.position.y < fairyBody.position.y - 50){
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === LEFT_ARROW) {
		Matter.Body.setStatic(starBody,false);
		fairyBody.position.x = fairyBody.position.x - 5.9;
	}

	if (keyCode === RIGHT_ARROW) {
		Matter.Body.setStatic(starBody,false);
		fairyBody.position.x = fairyBody.position.x + 5.9;
	}
}	
}
