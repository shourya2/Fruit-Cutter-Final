var BG;
var apple, melon , mango , berry , orange ; 
var knife , knifeIMG ;
var appleG , melonG , mangoG , berryG , orangeG ;
var appleG2 , melonG2 , mangoG2 , berryG2 , orangeG2 ;
var score = 0
var life = 3;
var cutS;
var RestartS;
var gameState = "PLAY"


function setup() {
    createCanvas(400, 400);
    knife2 = createSprite(200,350,2,2)
    knife2.addImage("knife",knifeIMG)  
    knife2.scale = 0.3
      
    knife1 = createSprite(150,350,2,2)
    knife1.addImage("knife",knifeIMG)  
    knife1.scale = 0.3
      
    knife3 = createSprite(250,350,2,2)
    knife3.addImage("knife",knifeIMG)  
    knife3.scale = 0.3  

    melonG = createGroup()
    appleG = createGroup()
    mangoG = createGroup()
    berryG = createGroup()
    orangeG = createGroup()

    melonG2 = createGroup()
    appleG2 = createGroup()
    mangoG2= createGroup()
    berryG2 = createGroup()
    orangeG2 = createGroup()

    edges = createEdgeSprites();
      
    RestartS = createSprite(200,200,20,20); 
    RestartS.visible = false;
}


function keyPressed(){  


if(keyCode === 83){
    knife1.velocityY = -50    
      
    if(knife1.y<0 && knife2.velocityY===0 && knife3.velocityY===0){
        knife2.velocityY = -50    
          
      }  
      
    if(knife2.y<0 && knife3.velocityY===0){
        knife3.velocityY = -50    
      
      }  
 
    }
}


function preload(){
    BG = loadImage("FC landscape.jpg")
    apple = loadImage("apple.png")
    orange = loadImage("orange.png") 
    berry = loadImage("strawberry.png") 
    melon = loadImage("melon.png") 
    mango = loadImage("mango.png") 
    knifeIMG = loadImage("knife.png") 
    cutS = loadSound("cut.mp3")
  
  
}


function spawnobjects(){
    if(frameCount % 100 === 0 ){
        var obj1 = createSprite(400,Math.round(random(10,250)),30,10)   
        obj1.velocityX = -3
        obj1.scale = 0.1
        selectFruit1 = Math.round(random(1,5)) 

        if(selectFruit1===1){
            obj1.addImage("M",mango);
            mangoG.setLifetimeEach(150);  
            mangoG.add(obj1)  
          }

        if(selectFruit1===2){
            obj1.addImage("A",apple);
            appleG.add(obj1)
            appleG.setLifetimeEach(150);   
          }

      if(selectFruit1===3){
    obj1.addImage("M",melon);
    obj1.scale = 0.15
    melonG.add(obj1)    
    melonG.setLifetimeEach(150);  
    }
      if(selectFruit1===4){
    obj1.addImage("S",berry);
    berryG.add(obj1)
    berryG.setLifetimeEach(150);   
    }
    if(selectFruit1===5){
    obj1.addImage("O",orange);
    orangeG.add(obj1) 
    orangeG.setLifetimeEach(150);  
    }
      
    
      
    }  
  
  
}
function spawnobjects2(){
if(frameCount % 100 === 0 ){
var obj1 = createSprite(-10,Math.round(random(10,250)),30,10)   
obj1.velocityX = 3
  
obj1.scale = 0.1
selectFruit2 = Math.round(random(1,5)) 
if(selectFruit2===1){
obj1.addImage("M",mango);
mangoG2.add(obj1)
mangoG2.setLifetimeEach(150);  
}
  if(selectFruit2===2){
obj1.addImage("A",apple);
appleG2.add(obj1) 
appleG2.setLifetimeEach(150);  
}
  if(selectFruit2===3){
obj1.addImage("M",melon);
obj1.scale = 0.15
melonG2.add(obj1) 
melonG2.setLifetimeEach(150);  
}
  if(selectFruit2===4){
obj1.addImage("S",berry);
berryG2.add(obj1)
berryG2.setLifetimeEach(150);   
}
 if(selectFruit2===5){
obj1.addImage("O",orange);
orangeG2.add(obj1)
orangeG2.setLifetimeEach(150);   
}
  
  
  
}  
  
  
}

function draw() {
    
if(gameState === "PLAY"){
   background(BG);
   RestartS.visible = false;

    spawnobjects();
  spawnobjects2();
  cutFruit();
   drawSprites()
  FCscore();
  controlLife();
  if(life === 0){
   gameState = "END" 
    
  }
  
   }  
 
if(gameState === "END"){
   RestartS.visible = true;
   gameOver();
  if(mousePressedOver(RestartS)){
         Reset();
     }
  
  
  
   }  
  
}
function Reset (){
 //console.log("Reset"); 
gameState = "PLAY"
life = 3;
knife1.x = 150;
knife1.y = 350;
knife2.x = 200;
knife2.y = 350;
knife3.x = 250;
knife3.y = 350;

knife1.velocityY=0;
knife2.velocityY=0;
knife3.velocityY=0;
}

function cutFruit (){
  
if(knife1.isTouching(melonG)|| knife2.isTouching(melonG)||knife3.isTouching(melonG)){
score = score+10   
melonG.destroyEach()   
cutS.play();  
   } 
   if(knife1.isTouching(melonG2)|| knife2.isTouching(melonG2)||knife3.isTouching(melonG2)){
    score = score+10   
    melonG2.destroyEach()   
    cutS.play();  
       }  
  if(knife1.isTouching(appleG)|| knife2.isTouching(appleG)||knife3.isTouching(appleG)){
score = score+5   
appleG.destroyEach()
    cutS.play();
   }  
   if(knife1.isTouching(appleG2)|| knife2.isTouching(appleG2)||knife3.isTouching(appleG2)){
    score = score+5   
    appleG2.destroyEach()
        cutS.play();
       }  
  if(knife1.isTouching(orangeG)|| knife2.isTouching(orangeG)||knife3.isTouching(orangeG)){
score = score+4   
orangeG.destroyEach() 
    cutS.play();
   } 
   if(knife1.isTouching(orangeG2)|| knife2.isTouching(orangeG2)||knife3.isTouching(orangeG2)){
    score = score+4   
    orangeG2.destroyEach() 
        cutS.play();
       }  
  if(knife1.isTouching(berryG)|| knife2.isTouching(berryG)||knife3.isTouching(berryG)){
score = score+4   
berryG.destroyEach()
    cutS.play();
  
   }  
   if(knife1.isTouching(berryG2)|| knife2.isTouching(berryG2)||knife3.isTouching(berryG2)){
    score = score+4   
    berryG2.destroyEach()
        cutS.play();
      
       }  
  if(knife1.isTouching(mangoG)|| knife2.isTouching(mangoG)||knife3.isTouching(mangoG)){
score = score+7   
mangoG.destroyEach()   
    cutS.play();
   } 
   if(knife1.isTouching(mangoG2)|| knife2.isTouching(mangoG2)||knife3.isTouching(mangoG2)){
    score = score+7   
    mangoG2.destroyEach()   
        cutS.play();
       }   
  
}

function FCscore (){
textSize(20)
fill("black")  
text("score ="+score,270,365)
 
text("Lives ="+life,20,365)  
  
  }


function controlLife(){
  
if(life>0){
if(knife1.y === 0 || knife2.y === 0 || knife3.y === 0){
life = life-1   
   
   }   
   
   }  
  
}

function gameOver(){

background("green")  
fill("Yellow")
textSize(30)
stroke("Yellow")
strokeWeight(2)  
text("GAME OVER",130,150) 
mangoG.destroyEach();  
berryG.destroyEach();
appleG.destroyEach();
melonG.destroyEach();
orangeG.destroyEach();

mangoG2.destroyEach();  
berryG2.destroyEach();
appleG2.destroyEach();
melonG2.destroyEach();
orangeG2.destroyEach();
//knife1.destroy();  
//knife2.destroy();
//knife3.destroy();

strokeWeight(1) 
text("RESTART",130,370 );
RestartS.visible = true; 
RestartS.display(); 
  


  
}













