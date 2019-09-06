let button;
let startButton;

let envelope;
let playing = false;


function setup(){
  createCanvas(200, 200);

  envelope = new p5.Envelope();
  envelope.setADSR(0.1, 0.1, 0.6, 0.75);
  envelope.setRange(1, 0);

  wave = new p5.Oscillator();
  wave.setType("sine");
  // wave.setType("triangle");
  // wave.setType("square");
  // wave.setType("sawtooth");

  startButton = createButton("start");
  startButton.mousePressed(playSound);
  button  = createButton("play");
  button.mousePressed(togglePlaying);
  button.mouseReleased(triggerReleased);
}

function draw(){
  background(0);
}

function playSound(){
  playing = !playing;
  if(playing){
    wave.start();
    wave.amp(envelope);
    wave.freq(440);
  }else{
    wave.stop();
  }
}

function togglePlaying(){
  if(playing){
    envelope.play();
    envelope.triggerAttack();//Sustain the "sustain phase" until released
  }
}

function triggerReleased(){
  envelope.triggerRelease();//Sustain until released
}
