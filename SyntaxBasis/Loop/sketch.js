var offSet = 0;
function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(0);
  strokeWeight(2);
  stroke(255);

  for(var x = 0; x <= width; x += 50){
    fill(255, 0, 200);
    ellipse(x + offSet, height/2, 25, 25);
  }
  offSet++;
}
