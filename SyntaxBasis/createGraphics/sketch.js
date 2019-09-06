var x = 200;
var y = 200;
var trailCanvas;

function setup() {
    createCanvas(400,400);
    //createGraphics allows another canvas on canvas.
    trailCanvas = createGraphics(width, height);
    trailCanvas.clear();//Make secondary canvas invisible
    //trailCanvas.background(255,0,0);
}

function draw(){
  //No trails !
  background(0);
  x += random(-5, 5);
  y += random(-5, 5);
  fill(255,0, 0, 200);
  stroke(255);
  rectMode(CENTER);
  rect(x, y, 20, 20);

  //Trails
  if(mouseIsPressed){
    trailCanvas.fill(255, 127);
    trailCanvas.noStroke();
    trailCanvas.ellipse(mouseX, mouseY, 60, 60);
  }
  image(trailCanvas, 0, 0);
}
