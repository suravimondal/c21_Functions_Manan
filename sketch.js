var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car= createSprite(100,200,20,30);
  car.shapeColor= "orange";
car.velocityX= 5;

  wall= createSprite(800,200,20,100);
  wall.shapeColor= "white";
}

function draw() {
  background(0);  
  console.log(movingRect.x-fixedRect.x);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(IS_TOUCHING(car,wall)){
    car.shapeColor= "red";
fill("yellow");
textSize(30);
text("TOUCHED!!",300,300);

  }
  else{
    car.shapeColor = "orange";
  }
  bounce_off(car,wall);
  drawSprites();
}
