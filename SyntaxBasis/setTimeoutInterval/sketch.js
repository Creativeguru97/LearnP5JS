let x = 0;

let timer;
let counter = 0;
let interval;
let isCounting = true;

function setup(){
  createCanvas(200, 200);
  timer = createP('timer');
  interval = setInterval(timeIt, 1000);
  button = createButton("start");
  button.mousePressed(start);
  button = createButton("stop");
  button.mousePressed(stop);
}

function start(){
  if(isCounting == false){
    counter = 0;
    interval = setInterval(timeIt, 1000);
    isCounting = true;
  }
}

function stop(){
  clearInterval(interval);
  isCounting = false;
}


function timeIt(){
  timer.html(counter);
  counter++;
}

// function mousePressed(){
//   setTimeout(recursion, 1000);
// }
// function recursion(){
//   createP('recursive!!!!!!');
//   setTimeout(recursion, 1000);
// }

function draw(){
  background(0);
  stroke(255);
  line(x, 0, x, height);

  x = x + 3;
  if(x > width){
    x = 0;
  }
}
