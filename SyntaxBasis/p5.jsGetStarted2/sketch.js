var position = {
  x : 100,
  y : 50
};
var col = {
  r : 255,
  g : 0,
  b : 0
};

//void setup(){}...
function setup() {
    createCanvas(400,400);
    background(0);
}

function draw() {
    col.r = random(100, 255);

    col.b = random(100, 190);
    position.x = random(0, width);
    position.y = random(0, height);
    fill(col.r,col.g,col.b);
    noStroke();
    ellipse(position.x, position.y, 24, 24);
}
