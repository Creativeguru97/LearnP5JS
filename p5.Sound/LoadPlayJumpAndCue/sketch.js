let song;
let button;
let jumpButton;

// let sliderVolume;
let sliderRate;
let sliderPan;

// function preload(){
//   song = loadSound("The_Columbians_-_Just_Like_A_Rainbow.mp3");
// }

function setup(){
  createCanvas(200, 200);
  song = loadSound("The_Columbians_-_Just_Like_A_Rainbow.mp3", afterLoaded);
  // sliderVolume = createSlider(0, 1, 0.5, 0.1);
  background(0);
  song.addCue(5, changeBackground, color(random(255), random(255), random(255)));//callback function at certain time in the soundfile
  sliderRate = createSlider(0, 3, 1, 0.1); //(min, max, default, increment)
  sliderPan = createSlider(-1, 1, 0, 0.1);
}

function draw(){
  // let brightness = map(song.currentTime(), 0, song.duration(), 0, 255);
  // background(brightness);
  // console.log(brightness);
  // song.setVolume(sliderRate.value());
  song.rate(sliderRate.value());//Change speed of playing
  song.pan(sliderPan.value());


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
    song.loop();
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
}

// function keyTyped(){
//   if(key == "p"){
//     song.play();
//   }
// }

// function loopSound(){
//   song.loop();
// }
