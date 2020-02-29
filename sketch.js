//GLOBAL
var kitchen;
var fridgeOn = 1;
var bulbOn = 1;
var acOn = 1;
var sinkOn = 1;
var dishwasherOn = 1;
var washingmachineOn = 1;
var clothRotate = 0;
let rotaeClothes = false;


function preload(){ //open preload
  kitchen = loadImage('kitchen.jpg');
  soundFormats("mp3");
  ac = loadSound("ac.mp3");
  bulb = loadSound("bulb.mp3");
  dishwasher = loadSound("dishwasher.mp3");
  fridge = loadSound("fridge.mp3");
  sink = loadSound("sink.mp3");
  washingmachine = loadSound("washing_machine.mp3");
  clothes = loadImage("washingimg.png");
  
} //close preload

function setup() {//open setup
  createCanvas(700, 700);
  background (100);
  fridgeOn = 1;
  fridge.play();
  bulbOn = 1;
  bulb.play();
  acOn = 1;
  ac.play();
  sinkOn = 1;
  sink.play();
  dishwasherOn = 1;
  dishwasher.play();
  washingmachineOn = 1;
  washingmachine.play();
    
  
} //close setup

function draw() {//open draw
  background(kitchen);
  
  //WASHER_CLOTHES
  if(rotaeClothes==false){
    
  push();
  translate(100, 593); 
  rotate(radians(0));
  imageMode(CENTER);
  image(clothes, 0, 0, 222, 195.5); 
  pop();
    
  }else{
    
    push();
  translate(100, 593); 
  rotate(radians(frameCount));
  imageMode(CENTER);
  image(clothes, 0, 0, 222, 195.5); 
  pop();
  }
  
  
  //FRIDGE
  
  if (fridgeOn) { //open
    fill(0, 0, 255);
  } //close
  else { //open
    fill(255, 0, 0);
  } //close
  
  rect(354, 684, 11, 11)
  
  //BULB
  
  if (bulbOn) { //open
    fill(226, 226, 0)
  } //close
  else { //open
    fill(0, 0, 0)
  } //close
  
  circle(341, 276, 23)
  
  //AC
  
  if (acOn) { //open
    fill(0, 0, 255);
  } //close
  else { //open
    fill(255, 0, 0);
  } //close
  
  rect (657, 66, 7, 8);
  
  //SINK
  
    if (sinkOn) { //open
    fill(0, 0, 255);
  } //close
  else { //open
    fill(255, 0, 0);
  } //close
  
  rect (589, 539, 5, 5);
  
    //DISHWASHER
  
    if (dishwasherOn) { //open
    fill(0, 0, 255);
  } //close
  else { //open
    fill(255, 0, 0);
  } //close
  
  rect (395, 565, 5, 4);
  
  //WASHING_MACHINE
  
    if (washingmachineOn) { //open
    fill(0, 0, 255);
  } //close
  else { //open
    fill(255, 0, 0);
  } //close
  
  circle(14, 488, 18)
  
  
} //close draw

  
//FRIDGE_B

function mousePressed() {//open mousepressed
  if (mouseX > 354 && mouseX < 370 && mouseY > 684 && mouseY < 696) { //open
    if (fridgeOn == 1) { //open
      fridgeOn = 0;
      fridge.stop();
    } //close
    else { //open
      fridgeOn = 1;
      fridge.play();
    } //close
  } //close
    


//BULB_B


  if (dist(mouseX, mouseY, 341, 276) < 23) { //open
    if (bulbOn == 1) { //open
      bulbOn= 0;
      bulb.stop();
    } //close
    else { //open
      bulbOn = 1;
      bulb.play();
    } //close
  } //close
  


//AC_B


  if (mouseX > 657 && mouseX < 673 && mouseY > 66 && mouseY < 74) { //open
    if (acOn == 1) { //open
      acOn = 0;
      ac.stop();
    } //close
    else { //open
      acOn = 1;
      ac.play();
    } //close
  } //close
  


//SINK_B


  if (mouseX > 589 && mouseX < 597 && mouseY > 539 && mouseY < 545) { //open
    if (sinkOn == 1) { //open
      siknOn = 0;
      sink.stop();
    } //close
    else { //open
      sinkOn = 1;
      sink.play();
    } //close
  } //close


//DISHWASHER_B


  if (mouseX > 395 && mouseX < 406 && mouseY > 565 && mouseY < 570) { //open
    if (dishwasherOn == 1) { //open
      dishwasherOn = 0;
      dishwasher.stop();
    } //close
    else { //open
      dishwasherOn = 1;
      dishwasher.play();
    } //close
  } //close



//WASHINGMACHINE_B


  if (dist(mouseX, mouseY, 14, 488) < 18) { //open
    if (washingmachineOn == 1) { //open
      washingmachineOn= 0;
      washingmachine.stop();
      rotaeClothes =false;
    } //close
    else { //open
      washingmachineOn = 1;
      washingmachine.play();
        
      //WASHER_CLOTHES
  
     rotaeClothes = true;
 
    } //close
  } //close
  
}


