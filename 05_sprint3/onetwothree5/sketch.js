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

  fft = new p5.FFT(0, 64);


  fr = 60
  leng = width / (song.duration() * fr)

  frameRate(fr);
  
  background(255);
}

function draw() {

  let spectrum = fft.analyze();

  angleMode(DEGREES);
  rectMode(CENTER);

  translate(0, height / 2);

  
  for (let i = 0; i < spectrum.length; i++) {


    noStroke();


    fill(0, 0, 0, spectrum[i]);

    

    let y = map(i, 0, spectrum.length, 0, height/2);

    let c = height /2 / spectrum.length
    let s = map(spectrum[i], 0, 255, 0, c);


    rect(x, y, leng, c);
    rect(x, -y, leng, c);
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

