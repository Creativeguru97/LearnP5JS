var circleRadius = 15.8;
var circle = {
  x : 70,
  y : 100,
  radius : 25
}

//void setup(){}...
function setup() {
    createCanvas(400,400);
    print("helllllllo"); //println("blah");
}

function draw() {
    background(100);

    fill(255,255,0);
    ellipse(circle.x, circle.y, circle.radius*2, circle.radius*2);
    rectMode(CENTER);
    //Surprisingly, semicolons in JS are somewhat optinal
    rect(200,300,30,40,10)
    /*Like Processing, I can write several row's of
    comment like this*/
    fill(255,0,0);
    ellipse(mouseX, mouseY, circleRadius*2,circleRadius*2);

}
function mousePressed(){
  circle.x +=10;
}
