//Create variables here
var database;
var dogImg, happyDogImg, database, foodS, foodStock;
var dog;


function preload()
{
  //load images here
  dogImg=loadImage("Dog.png");
  happyDogImg=loadImage("happydog.png");
}

function setup() {
  createCanvas(600, 600);
  database = firebase.database();
  dog=createSprite(300,400,20,20);
  dog.scale=0.5;
  dog.addImage("dogImg",dogImg);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("happyDog",happyDogImg);
}
  drawSprites();
  textSize(20);
  fill("red");
  stroke(4);
  text("Note:Press UP_ARROW Key to feed you virtual pet!!",90,100);
  //add styles here
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x -= 1;
  }
  database.ref('/').update({
    Food:x
 })
}


