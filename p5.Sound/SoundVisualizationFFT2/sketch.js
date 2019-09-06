//I use Chrome since p5.AudioIn is not supported on Safari and iOS.
let song;
let button;
let fft;
const widthX = 512;//Must be power of 2
const resolution = 64;
const w = widthX / resolution;

function preload(){
  // song = loadSound("The_Columbians_-_Just_Like_A_Rainbow.mp3");
  song = loadSound("Daniel_Shiffman - This_Dot_(prod._Kristian_Pedersen).wav");
}

function setup(){
  createCanvas(widthX, widthX);
  angleMode(DEGREES);

  button  =createButton("play");
  button.mousePressed(togglePlaying);
  fft = new p5.FFT(0.5, resolution);//For linear
  // fft = new p5.FFT(0.5, 256);
}

function draw(){
  background(0);
  let spectrum = fft.analyze();
  // console.log(spectrum);
  noStroke();

  // // //Linear
  // for(let i = 0; i < spectrum.length; i++){
  //   let amp = spectrum[i];
  //   let y = map(amp, 0, 256, 0, height);//Larger the amp value, higher line
  //   colorMode(HSB);
  //   fill(i+170, 255, 255);
  //   rect(i * w, height - y, w - 2, y);
  // }

  //Linear2
  translate(0, height/2);
  for(let i = 0; i < spectrum.length; i++){
    let amp = spectrum[i];
    let y = map(amp, 0, 256, w/2, height/4);//Larger the amp value, higher line
    colorMode(HSB);
    fill(i+170, 255, 255);
    rect(i * w, 0 - y, w - 4, y);
    rect(i * w, 0, w - 4, y);
  }

  //Radical
  // translate(width/2, height/2);
  // beginShape();
  // for(let i = 0; i < spectrum.length; i++){
  //   let angle = map(i, 0, spectrum.length-1, 0, 359);
  //   let amp = spectrum[i];
  //   r = map(amp, 0, 256, widthX/5, width/2);
  //   let x = r * cos(angle);
  //   let y = r * sin(angle);
  //   let xS = width/5.2 * cos(angle);
  //   let yS = width/5.2 * sin(angle);
  //   colorMode(HSB);
  //   let hue = map(i, 0, spectrum.length, 0, 64);
  //   stroke(hue, 255, 255);
  //   // stroke(hue+170, 255, 255);
  //   // line(xS, yS, x, y);
  //   line(x/2, y/2, x, y);
  // }
  // endShape();

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
