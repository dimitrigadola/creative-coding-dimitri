let song;
let fft;


function preload() {
  song = loadSound('assets/Billie Eilish - BLUE (Official Lyric Video).mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  fft = new p5.FFT(0.86, 128);
}

function draw() {
  background(255);
  let spectrum = fft.analyze();
  console.log(spectrum);

  for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    let y = map(amp, 0, 256, height, 0);
    let x = map(i, 0, spectrum.length, 0, width);
    
    noFill();
    stroke(0);
    strokeWeight(1);
    rect(x, y, width / spectrum.length, height-y);
  }

}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

