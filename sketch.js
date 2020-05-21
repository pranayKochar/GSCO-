var car 
var wall
var speed
var weight
var deformation

function setup() {
  createCanvas(1600,400);

  speed = random(30,95);
  weight = random(400,1500);

  car = createSprite(400, 200, 50, 50);
  car.shapeColor = "pink";
  car.velocityX = speed;

  wall = createSprite(1500,200,60,400);
  wall.shapeColor = color(80,80,80) ;

  

  console.log(wall.x-car.x);
  console.log( car.width/2+wall.width/2);
}

function draw() {
  background(255,255,255); 
   
  drawSprites();
  collide(car,wall);
}

function collide(object1, object2){
  if (object2.x-object1.x < object1.width/2+object2.width/2) {
      deform();
      object1.velocityX = 0;
      object2.velocityX = 0;

      
  }
}

function deform() {
deformation = (0.5* weight* speed* speed)/22500;

  if(deformation > 180){
    car.shapeColor = color(255,0,0);
  }
  if(deformation < 100){
    car.shapeColor = "green";
  }
  if(deformation < 180 && deformation > 100) {
    car.shapeColor = color(230,230,0);
  }

}
