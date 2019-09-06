let bubble = [];

  function setup(){
    createCanvas(640, 360);
    for(let i = 0; i < 10; i++){
      bubble[i] = new Bubble(random(width), random(height), random(20, 40));
    }
    // for(let i = 0; i < 3; i++){
    //   let b = new Bubble(random(width), random(height), random(20, 40));
    //   bubble.push(b);
    // }

  }

  function mousePressed(){
    for(let i = bubble.length-1; i >= 0; i--){
      if(bubble[i].rollOver(mouseX, mouseY)){
        bubble.splice(i, 1);
      }
    }
    // print(bubble.isRollOver);
  }

  function draw(){
    background(0);

    // for(let b of bubble){//enhanced loop in JS!!!!!
    //   b.move();
    //   b.show();
    //   b.bounce();
    // }

    for(let i = 0; i < bubble.length; i++){
      bubble[i].move();
      bubble[i].show();
      bubble[i].bounce();
      bubble[i].rollOver(mouseX, mouseY);
    }
  }


class Bubble{
  constructor(_x, _y, EachRadius){
    this.radius = EachRadius;
    this.x = _x;
    this.y = _y;
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
    this.col = color(255, 0, 190, 0);
  }

  rollOver(mx, my){
    let d = dist(mx, my, this.x, this.y);
    if(d < this.radius){
      this.changeCol(127);
      return true;
    }else{
      this.changeCol(0);
      return false;
    }
  }

  changeCol(alpha){
      this.col = color(255, 0, 190, alpha);
  }

  move(){
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;
  }

  show(){
    stroke(255);
      strokeWeight(2);
      fill(this.col);
      stroke(255, 0, 190);
      ellipse(this.x, this.y, this.radius*2, this.radius*2);
      // line(this.x, this.y, mouseX, mouseY);
  }

  bounce(){
    if(this.x > width - this.radius){
      this.x = width - this.radius;
      this.speedX = this.speedX * -1;
    }
    if(this.x < this.radius){
      this.x = this.radius;
      this.speedX = this.speedX * -1;
    }

    if(this.y > height - this.radius){
      this.y = height - this.radius
      this.speedY = this.speedY * -1;
    }
    if(this.y < this.radius){
      this.y = this.radius;
      this.speedY = this.speedY * -1;
    }
  }
}
