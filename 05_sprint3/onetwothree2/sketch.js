let song;
let fft;

let fr, r, r2;


function preload() {
  song = loadSound('assets/rec1.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  song.play();

  fft = new p5.FFT(0, 128);

  fr = 24
  r = 360 / (song.duration() * fr)
  r2 = r

  frameRate(fr);

  background(255);
}

function draw() {

  let spectrum = fft.analyze();
  let spectrum2 = spectrum.reverse();

  angleMode(DEGREES);


  push();
  translate(width / 2, height / 2);
  rotate(r);

  for (let i = 0; i < spectrum2.length; i++) {

    // strokeWeight(0.008 * spectrum2[i]);
    noStroke();
    

    fill(0, 0, 0, spectrum2[i]);

    let size = height / 2 - 100
    let w = map(i, 0, spectrum2.length, 0, size);

    let c = size / spectrum2.length
    let s = map(spectrum2[i], 0, 255, 0, c);

    ellipse(0, w, s, s);
  }

  
  pop();

  r += r2

}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

