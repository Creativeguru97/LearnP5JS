let bubble = [];


  function setup(){
    createCanvas(640, 360);
    for(let i = 0; i < 3000; i++){
      bubble[i] = new Bubble(random(8, 20));
    }
  }

  function draw(){
    background(0);
    for(let i = 0; i < bubble.length; i++){
      bubble[i].move();
      bubble[i].show();
      bubble[i].bounce();
    }
    print(frameRate());
  }


class Bubble{
  constructor(EachRadius){
    this.radius = EachRadius;
    this.x = random(this.radius, width-this.radius);
    this.y = random(this.radius, height-this.radius);
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
  }

  move(){
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;
  }
  show(){
    stroke(255);
      //strokeWeight(0);
      // noFill();
      // stroke(255,0,190);
      noStroke();
      fill(255, 6);
      ellipse(this.x, this.y, this.radius*2, this.radius*2);
  }

  bounce(){
    if(this.x > width - this.radius || this.x < this.radius){
      this.speedX = this.speedX * -1;
    }
    if(this.y > height - this.radius || this.y < this.radius){
      this.speedY = this.speedY * -1;
    }
  }
}
