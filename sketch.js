var iss,spacecraft;
var hasDocked;
var hasDockrd = false;
var iss_Img,back_Img,normal_Img;
var left_Img,right_Img,up_Img;
var firebase,database;

function preload(){
  //code for loading the images
  iss_Img = loadImage("images/iss.png");
  back_Img = loadImage("images/spacebg.jpg");
  normal_Img = loadImage("images/spacecraft1.png");
  up_Img = loadImage ("images/spacecraft2.png");
  left_Img = loadImage("images/spacecraft3.png");
  right_Img = loadImage("images/spacecraft4.png")
}

function setup() {
  //code for canvas display
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  // code for creating iss
  iss = createSprite (330,130);
  iss.addImage("iss",iss_Img);
  iss.scale=0.60;

  //code for creating spacecraft1
  spacecraft = createSprite (285,480);
  spacecraft.addImage("spacecraft",normal_Img);
  spacecraft.scale=0.15;
}

function draw() {
  //code for displaying the background
  background(back_Img);  
  console.log(spacecraft.x,spacecraft.y);
  spacecraft.setCollider("rectangle",0,0,285,285);
  //spacecraft.debug = true
  iss.setCollider("rectangle",0,0,485,165);
  //iss.debug = true
  if(!hasDocked){
    spacecraft.x =  spacecraft.x + random(-1,1);

    if(keyDown("UP_ARROW")){
      spacecraft.addImage("spacecraft",up_Img);
      spacecraft.y = spacecraft.y-2;
      
    }

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage("spacecraft",left_Img);
      spacecraft.x = spacecraft.x-2;
      
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage("spacecraft",right_Img);
      spacecraft.x = spacecraft.x+2;
      
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage("spacecraft",right_Img,left_Img);
      
      
    }

    if(spacecraft.isTouching(iss)){ 
      textSize(45)
      text("Docking succesfull",545,366);
    }
  }
  
  drawSprites();
}