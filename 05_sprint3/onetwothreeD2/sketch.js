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


  fr = 16;
  leng = 800 / (song.duration() * fr)

  frameRate(fr);

  x = 0

  //for my sound
  camera(1000, -600, 700, 100, -20, -100, 0, 1, 0);

  //for the whole area
  // camera(1000, -600, 700, 100, -50, 30, 0, 1, 0);

  perspective(PI / 8);

  background(255);

  // push();
  // translate(0, 0, 0)
  // box(800, 10, 500)
  // pop();

}

function draw() {

  let spectrum = fft.analyze();


  for (let i = 0; i < spectrum.length; i++) {

    push();

    let z = map(i, 0, spectrum.length, 0, 500);
    let y = map(spectrum[i], 0, 255, 0, 100);

    translate(-800 / 2 + x, -y / 2, -500 / 2 + z);


    noStroke();

    ambientLight(242);

    directionalLight(255, 255, 255, 0.5, 1, -1);

    ambientMaterial(255, 100, 0);

    // ambientMaterial(30, 10, 100);


    if (y > 0) {
      box(leng, y, 500 / spectrum.length)
    }


    pop();

  }

  // pointLight(255, 255, 255, 0, 0, 0);
  // directionalLight(255, 255, 255, -1, 1, -1);
  // ambientMaterial(255, 100, 0);
  // push();
  // noStroke();
  // sphere(50);
  // pop();

  x += leng

  if (x > 800) {
    noLoop();
  }

  // push();
  // translate(0, 0, 0)
  // strokeWeight(4);
  // stroke(255, 0, 0);
  // line(0, 0, 0, 200, 0 , 0);
  // stroke(0, 255, 0);
  // line(0, 0, 0, 0, 200 , 0);
  // stroke(0, 0, 255);
  // line(0, 0, 0, 0, 0 , 200);
  // pop();


}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

