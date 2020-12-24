//Create variables here
var dog, happyDog, database, dogImg, happyDog_Img;
var foodS, foodStack;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog_Img = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImg);
  dog.scale=0.1;  

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46,139,87);
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog_Img);
  }

  textSize(18);
  fill("white");
  stroke("black");
  text("Note:Press the 'Up' arrow to give Drago milk!",75,25);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
})
}



