let canvas;
let h1;
let x = 100;
let y = 100;

function setup(){
  canvas = createCanvas(400, 300);
  canvas.id("canvas");
  canvas.position(300, 500);
  h1 = createElement("h1", "Waiting");


}

function mousePressed(){
  h1.html("Now, I will show you my favorite number.");
  createP("My favorite number is "+random(0, 10));
}

function draw(){
  // background(127);
  clear();
  fill(255, 0, 0);
  rect(x, y, 50, 50);
  h1.position(x, y);
  x+=random(-5, 5);

}
