let song;
let button;
let jumpButton;
let amp;
let sliderVolume;

// function preload(){
//   song = loadSound("The_Columbians_-_Just_Like_A_Rainbow.mp3");
// }

function setup(){
  createCanvas(200, 200);
  song = loadSound("The_Columbians_-_Just_Like_A_Rainbow.mp3", afterLoaded);

  amp = new p5.Amplitude();
  sliderVolume = createSlider(0, 3, 1, 0.1);
}

function draw(){
  background(0);
  song.setVolume(sliderVolume.value());

  let vol = amp.getLevel();
  let diameter = map(vol, 0, 1, width/3, width/1.5);
  // print(vol);

  fill(0, 175, 255);
  noStroke();
  ellipse(width/2, height/2, diameter, diameter);
}

function afterLoaded(){
  button  =createButton("play");
  button.mousePressed(togglePlaying);
  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);
  // song.play();
}

function togglePlaying(){
  if(!song.isPlaying()){
    song.play();
    button.html("pause");
  }else{
    song.pause();
    button.html("play");
  }
}

function changeBackground(color){
  background(color);
}

function jumpSong(){
  let length = song.duration();//return song's length
  song.jump(random(length));
  button.html("pause");
}
