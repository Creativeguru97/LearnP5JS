let song;
let button;

// let sliderVolume;
let sliderRate;
let sliderPan;

function preload(){
  song = loadSound("fanfare00.mp3");
}

function setup(){
  createCanvas(200, 200);

  song.playMode("sustain");
  // song.playMode("restart");
  button  =createButton("play");
  button.mousePressed(togglePlaying);
}

function draw(){

}

function togglePlaying(){
    song.play();
}
