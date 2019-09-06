let canvas;
let h1;
let x = 100;
let y = 100;

let input;
let paragraph;
let name;

function setup(){
  canvas = createCanvas(300, 300);
  canvas.id("canvas");
  canvas.position(20, 290);
  h1 = createElement("h1", "Waiting inout");
  input = createInput("Enter your name.");
  paragraph = createP("mouse interactive!!!");

  paragraph.mouseOver(overParagraph);
  paragraph.mouseOut(outParagraph);

  input.changed(updateText);
}

function draw(){
  background(127);
  fill(255, 0, 0);
  rect(x, y, 50, 50);
  // h1.html(input.value());
  text(input.value(), 10, 20);

}

function updateText(){
  h1.html(input.value());
}


function overParagraph(){
  paragraph.html("Your mouse is over me!!!");
}

function outParagraph(){
  paragraph.html("Your mouse is out of me!!!");
}
