
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score,ground;
var back,backImg;
     

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backImg=loadImage("jungle.jpg");
 
}



function setup() {
  createCanvas(500,500);
  
  back=createSprite(0,0,600,400);
  back.addImage(backImg);
  back.scale=10;
  back.velocityX=-4;
  back.x=back.width/2;
  
monkey=createSprite(100,450,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(250,470,500,10);
  ground.visible=false;
  
  foodGroup=new Group();
  obstacleGroup=new Group();
  
  score=0;
  
  
}


function draw() {
  
  background("lightgreen");
  monkey.collide(ground);
  
   
  if(back.x<0){
    back.x=back.width/2;
  }
  
  if(keyDown("space")&&monkey.y>150){
    monkey.velocityY=-4;
  }
  
  monkey.velocityY=monkey.velocityY+0.4;
  
    
  
  if(foodGroup.isTouching(monkey)){
  
      foodGroup.destroyEach();
    score = score + 2;
    }
    switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14;
                break;
        case 30: monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        default: break;
    }
  
   if(obstacleGroup.isTouching(monkey)){
     monkey.scale=0.08;
   }

  createFood();
  createObstacles();
 drawSprites(); 
  
  fill("white");
  stroke(20);
  textSize(20);
  text("Score : "+score,400,50);
  
}
function createFood(){
  var i=Math.round(random(3,8));
  if(frameCount%80===0){
    banana=createSprite(700,i*50,10,10);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-6;
    banana.lifetime=300;
    
    monkey.depth = banana.depth + 1;
    foodGroup.add(banana);
  }
}
function createObstacles(){
  if(frameCount%100===0){
    obstacle=createSprite(500,450,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.125;
    obstacle.velocityX=-3;
     obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}





