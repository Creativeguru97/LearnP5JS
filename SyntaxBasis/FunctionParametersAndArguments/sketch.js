function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(150);
  lollipop(width/2, height/2, 100);
  lollipop(width/4, height/4, 50);
}

function lollipop(x, y, diameter){
  fill(0, 200, 255);
  rect(x-10, y, 20, 150);
  fill(255, 0, 200);
  ellipse(x, y, diameter, diameter);
}

/*function name (parameter){
  blah
  blah
  blah
  blah

  return something;
}*/
