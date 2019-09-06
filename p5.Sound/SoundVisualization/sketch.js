//I use Chrome since p5.AudioIn is not supported on Safari and iOS.
let song;
let button;
let volHistory = [];

function preload(){
  song = loadSound("The_Columbians_-_Just_Like_A_Rainbow.mp3");
}

function setup(){
  createCanvas(300, 300);
  angleMode(DEGREES);

  button  =createButton("play");
  button.mousePressed(togglePlaying);
  amplitude = new p5.Amplitude();
}

function draw(){
  background(0);
  let vol = amplitude.getLevel();
  volHistory.push(vol);
  // print(volHistory[359]);

  translate(width/2, height/2);

  //Radical
  beginShape();
  stroke(255);
  noFill();
  for(let i = 0; i < 360; i++){
    if(volHistory[i] == null){

    }else{
      // print(volHistory[i]);
      let r = map(volHistory[i], 0, 1, height/6, height/2);
      let x = r * cos(i);
      let y = r * sin(i);
      vertex(x, y);
      // print(volHistory[0]);
    }
  }
  endShape();

  if(volHistory.length > 360){
    volHistory.splice(0, 1);
  }

  // //Linear
  // beginShape();
  // stroke(255);
  // noFill();
  // for(let i = 0; i < volHistory.length; i++){
  //   let y = map(volHistory[i], 0, 1, 0, -height/2);
  //   vertex(i - height/2, y);
  // }
  // endShape();
  //
  // if(volHistory.length > width){
  //   volHistory.splice(0, 1);
  // }

}


function togglePlaying(){
  if(!song.isPlaying()){
    song.loop();
    button.html("pause");
  }else{
    song.pause();
    button.html("play");
  }
}
