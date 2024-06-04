let song;
let fft;

let fr, leng;
let x;


function preload() {
  song = loadSound('assets/rec1.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  song.play();

  fft = new p5.FFT(0, 64);


  fr = 60
  leng = 800 / (song.duration() * fr)

  frameRate(fr);

  x = 0
  camera(1000, -600, 700, 0, -100, 0, 0, 1, 0);
  perspective(.8);

  background(255);

  // push();
  // translate(0, 10, 0)
  // box(800, 10, 500)
  // pop();

}

function draw() {

  let spectrum = fft.analyze();



  for (let i = 0; i < spectrum.length; i++) {

    push();

    let z = map(i, 0, spectrum.length, 0, 500);
    let y = map(spectrum[i], 0, 255, 0, 100);

    translate(-800 / 2 + x, 0, -500 / 2 + z);

    
    noStroke();
    ambientMaterial(255, 100, 0);


    
    if (y > 0) {
      box(leng, y, 500 / spectrum.length)
    }

    
    pop();
  }


  x += leng

  if (x > 800) {
    noLoop();
  }

}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

