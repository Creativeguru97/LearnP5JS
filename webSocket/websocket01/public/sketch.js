//To see this result on brawser: localhost:3000
let socket;

function setup(){
  createCanvas(400, 300);
  background(0);

  //Open a connection to the server from client side
  socket = io.connect('http://localhost:3000');
  socket.on('mouseData', (data) => {
    noStroke();
    fill(255, 0, 100);
    ellipse(data.x, data.y, 10, 10);
  });
}


function draw(){
  if(mouseIsPressed){
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 10, 10);
    console.log(mouseX + ", "+ mouseY);

    let data = {
      x: mouseX,
      y: mouseY
    }
    socket.emit('mouseData', data);
  }
}
