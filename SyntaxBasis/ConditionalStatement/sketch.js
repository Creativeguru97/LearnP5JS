var x;
var y;
var speedX;
var speedY;
var radius;
var nofill = true;

//optional way
// var ball = {
//   x:random(radius, width - radius),
//   y:random(radius, height - radius),
//   speedX:random(1, 4),
//   speedY:random(1, 4),
//   radius:10,
//   nofill:true
// }

function setup(){
  createCanvas(640, 360);
  speedX = random(1, 4);
  speedY = random(1, 4);
  radius = 10;
  x = random(radius, width - radius);
  y = random(radius, height - radius);
}

function draw(){
  background(0);
  stroke(255);
  strokeWeight(2);

  if(mouseX < width/3){//Exactly the same with Processing!!!!!!!
    stroke(0,255,120);
  }else if(mouseX > width/3 && mouseX < width*2/3){
    stroke(255,0,190);
  }else{
    stroke(255);
  }

  ellipse(x, y, radius*2, radius*2);
  x = x + speedX;
  y = y + speedY;

  if(x > width - radius || x < radius){
    speedX = speedX * -1;
  }
  if(y > height - radius || y < radius){
    speedY = speedY * -1;
  }

  if(nofill){
    noFill();
  }else{
    fill(255);
  }
}

function mousePressed(){
  nofill = !nofill;
}
