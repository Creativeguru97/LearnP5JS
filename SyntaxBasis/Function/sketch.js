//Function
/*Reason to use function:
  Modularity
  Reuseability*/

  let x;
  let y;
  let speedX;
  let speedY;
  let radius;

  //optional way
  // let ball = {
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
    move();
    bounce();
    display();
  }

  function move(){
    x = x + speedX;
    y = y + speedY;
  }

  function bounce(){
    if(x > width - radius || x < radius){
      speedX = speedX * -1;
    }
    if(y > height - radius || y < radius){
      speedY = speedY * -1;
    }
  }

  function display(){
    stroke(255);
    strokeWeight(2);
    noFill();
    stroke(255,0,190);
    ellipse(x, y, radius*2, radius*2);
  }
