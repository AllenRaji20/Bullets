var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(30,52);
  thickness=random(22,83); 

  bullet = createSprite(50,200,10,10);
  bullet.velocityX = speed;
  bullet.debug = true;

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapecolor = (80,80,80);

}

  function draw() {
  background(255,255,255);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22509;
    if(deformation>100) {
      bullet.shapecolor=color(255,0,0);
    } 
  }

  if(deformation<100 && deformation>100) {
    bullet.shapecolor=color(230,230,0);
  }

  if(deformation<100){
    bullet.shapecolor=color(0,255,0);
  }

  drawSprites();
}

