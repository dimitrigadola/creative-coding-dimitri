let song;
let fft;

let fr, leng;
let x = 0;


function preload() {
  song = loadSound('assets/rec1.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  song.play();

  fft = new p5.FFT(0, 128);


  fr = 8
  leng = width / (song.duration() * fr)



  frameRate(fr);

  background(255);
}

function draw() {

  let spectrum = fft.analyze();

  angleMode(DEGREES);


  for (let i = 0; i < spectrum.length; i++) {


    noStroke();


    fill(255 - spectrum[i] / 10, 255/1.8 + spectrum[i] / 1.8, 255 - spectrum[i] / 6);

    let y = map(i, 0, spectrum.length, height, 0);

    let c = height / spectrum.length
    let s = map(spectrum[i], 0, 255, 0, c);

    ellipse(x, y, c, c);
  }


  x += leng

}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

