let canvas;
let happythings = ['rainbow', 'unicorn', 'purple', 'bacteria'];

function setup(){
  noCanvas();

  let button = select("#button");
  button.mousePressed(addItem);
}

function addItem(){
  let r = floor(random(0, happythings.length));
  let li = createElement('li', happythings[r]);
  li.parent("happylist");
}
