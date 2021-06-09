var mask1,mask2;
var covidGroup;
var sanitizer;
var line;
var gameOver;
var score = 0;

function preload(){
    mask1Image = loadImage("images/medical_mask_PNG31.png");
    cov1Image = loadImage("images/cov1.png");
    gameOverImage = loadImage("images/game over.png");

}
function setup(){
 createCanvas(750,600);
 edges = createEdgeSprites();

 mask1 = createSprite(100,550,20,20);
 mask1.addImage(mask1Image);
 mask1.scale = 0.1;
 gameOver = createSprite(375,300);
 gameOver.addImage(gameOverImage);
 gameOver.scale = 0.3;
 gameOver.visible = false;

 mask1.collide(edges[0]);
 mask1.collide(edges[1]);
 line = createSprite(0,580,1600,5);
 line.shapeColor= "red";
 covidGroup = new Group();
}

function draw(){
background("black");
textSize(18);
spawnCovid1();

text("Score: "+score,30,50);


if(keyDown("LEFT_ARROW")){
    mask1.x = mask1.x-8;

}
if(keyDown("RIGHT_ARROW")){
    mask1.x=mask1.x+8;
}
if(mask1.isTouching(covidGroup)){
    covidGroup.destroyEach();
    score = score+1;
}

if(covidGroup.isTouching(line)){
    covidGroup.setVelocityYEach(0);
    mask1.visible = false;
  gameOver.visible = true;
}





 drawSprites();
}

function spawnCovid1(){
if(frameCount % 80 === 0){
var covid1 = createSprite(150,-20,20,20);
covid1.addImage(cov1Image);
covid1.scale = 0.027
covid1.x = Math.round(random(15,735));
covid1.velocityY = 10;
covid1.lifetime = 800;
covidGroup.add(covid1);

}



}