let bubble = [];

  function setup(){
    createCanvas(640, 360);
    for(let i = 0; i < 200; i++){
      bubble[i] = new Bubble(random(width), random(height), random(20, 40));
    }
    // for(let i = 0; i < 3; i++){
    //   let b = new Bubble(random(width), random(height), random(20, 40));
    //   bubble.push(b);
    // }

  }


  function draw(){
    background(0);

    for(let i = 0; i < bubble.length; i++){
      bubble[i].move();
      bubble[i].show();
      bubble[i].bounce();

      let isIntersect = false;
      for(let j = 0; j < bubble.length; j++){
        if(i != j && bubble[i].intersects(bubble[j])){
          isIntersect = true;
        }
      }
      if(isIntersect){
        bubble[i].changeCol(127);
      }else{
        bubble[i].changeCol(0);
      }
    }

    //Alternative by using enhanced loop on ES6!!!
    // for(let b of bubble){//enhanced loop in JS ES6!!!!!
    //   b.move();
    //   b.show();
    //   b.bounce();
    //
    //   let isIntersect = false;
    //   for(let other of bubble){//enhanced loop in JS ES6!!!!!
    //     if(b != other && b.intersects(other)){
    //       isIntersect = true;
    //     }
    //   }
    //   if(isIntersect){
    //     b.changeCol(127);
    //   }else{
    //     b.changeCol(0);
    //   }
    // }

  }


class Bubble{
  //If I hard coded in this constructor like _x = 200, that's gonna be default value.
  constructor(_x, _y, EachRadius){
    this.radius = EachRadius;
    this.x = _x;
    this.y = _y;
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
    this.col = color(255, 0, 190, 0);
  }

  intersects(other){
    let d = dist(this.x, this.y, other.x, other.y);
    if(d < this.radius + other.radius){
      return true;
    }else{
      return false;
    }
    //Or just a line of boolean code below
    //return(d < this.radius + other.radius);
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
