var player1;
var maze;
var ghost1;
var ghost2;
var backgroundImage;
var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,a1,a2,a3,a4,a5,a6

function preload(){
  maze = loadImage("maze.png");
  ghost11 = loadImage("download.png");
  ghost22 = loadImage("ghost2.png");
  player11 = loadImage("pacman.png");
}
function setup() {
  createCanvas(800,400);
  player1 = createSprite(685,373,40,40);
  ghost1 = createSprite(500,120,10,10);
  ghost2 = createSprite(310,120,40,40);
  player1.addImage(player11);
  player1.scale = 0.04
  backgroundImage = createSprite(400,200);
  backgroundImage.addImage(maze);
  ghost1.addImage(ghost11);
  ghost1.scale = 0.3
  ghost2.addImage(ghost22);
  ghost2.scale = 0.2
  a = createSprite(80,209,15,350)
  b = createSprite(724,209,15,350)
  c = createSprite(274,106,15,150)
  d = createSprite(206,205,15,70)
  e = createSprite(402,138,15,80)
  f = createSprite(593,173,15,150)
  g = createSprite(658,201,15,75)
  h = createSprite(402,268,15,70)
  i = createSprite(530,265,15,70)
  j = createSprite(466,333,15,80)
  k = createSprite(336,330,15,75)
  l = createSprite(272,262,15,78)
  m = createSprite(147,139,15, 80)
  n = createSprite(465,204,15,80)
  o = createSprite(465,69,15,80)
  p = createSprite(334,201,15,75)
}

function draw() {
  background("white"); 
   fill("red")
   textSize(25)
  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY)
  player();
  


}
function player(){
  
  if(keyWentDown("up")){
    player1.velocityY = -3}

  if(keyWentDown("down")){
    player1.velocityY = 3
  }
  if(keyWentUp("down") || (keyWentUp("up"))){
    player1.velocityY = 0 
  }
  if(keyWentDown("right")){
    player1.velocityX= 4
  }
  if (keyWentDown("left")){
    player1.velocityX = -4
  }
  if(keyWentUp("right")|| (keyWentUp("left"))){
    player1.velocityX = 0
  }
  
  
}