var boyImg; 
var berryImg; 
var lionImg;
var tigerImg; 
var treeImg;
var wolfImg;
var backgroundImg;

function preload(){
 boyImg = loadImage("Images/Boy.png");
 berryImg = loadImage("Images/Berry.png");
 lionImg = loadImage("Images/Lion.png");
 tigerImg = loadImage("Images/Tiger.png");
 reeImg = loadImage("Images/Tree.png");
 wolfImg = loadImage("Images/Wolf.png");
 backgroundImg = loadImage("Images/Back.png")
}



function setup() {
  createCanvas(1600,800);
  
  boy = createSprite(50,650);
  berry = createSprite(50,50);
  wolf = createSprite(1600,800);
  tiger = createSprite(1550,750);
  lion = createSprite(1500,700);
  tree = createSprite(100,100);
  ground = createSprite(800,750,1600,150);
  ground.velocityX = -5;
  boy.addImage(boyImg);
}

function draw() {
background(backgroundImg)
edges = createEdgeSprites();
if(ground.x < 0){
  ground.x = ground.width/2
}
if(keyDown("space")){
  boy.velocityY = -15

}
if(keyDown("left_arrow")){
  boy.x= boy.x-10

}
if(keyDown("right_arrow")){
  boy.x= boy.x+10

}
boy.velocityY = boy.velocityY + 0.8
boy.collide(ground);
boy.bounceOff(edges[0])
boy.bounceOff(edges[1])
  drawSprites();
}