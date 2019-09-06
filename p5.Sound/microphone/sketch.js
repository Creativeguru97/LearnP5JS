//I use Chrome since p5.AudioIn is not supported on Safari and iOS.
let sensitiveness;
let microphone;
let song;
let button;

function preload(){
  song = loadSound("The_Columbians_-_Just_Like_A_Rainbow.mp3");
}

function setup(){
  createCanvas(300, 300);
  microphone = new p5.AudioIn(print("Unknown error occured"));

  // microphone.start();
  sensitiveness = createSlider(0.05, 1, 0.5, 0.05);//(min, max, default, increment)
  button  =createButton("play");
  button.mousePressed(togglePlaying);
}

function draw(){
  background(0);
  let micLevel = microphone.getLevel()*2;
  print(micLevel);
  let diameter = map(micLevel, 0, sensitiveness.value(), width/3, width);

  ellipse(width/2, height/2, diameter, diameter);
}

function togglePlaying(){
  if(!song.isPlaying()){
    microphone.start();
    song.loop();
    button.html("pause");
  }else{
    microphone.stop();
    song.pause();
    button.html("play");
  }
}
