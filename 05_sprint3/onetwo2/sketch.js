let song;
let fft;

let fr, r, r2;

function preload() {
  song = loadSound('assets/rec1.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  fft = new p5.FFT(0.86, 128);
  
  fr = 60;
  r = 0; // Initial rotation angle
  r2 = 360 / (song.duration() * fr); // Incremental rotation angle

  background(0);
}

function draw() {
  background(0, 20); // Add some opacity to create a trailing effect

  let spectrum = fft.analyze();
  let spectrum2 = spectrum.slice().reverse(); // Create a reversed copy of the spectrum

  angleMode(DEGREES);

  push();
  translate(width / 2, height / 2);
  rotate(r);
  r += r2; // Increment the rotation angle

  for (let i = 0; i < spectrum2.length; i++) {
    let len = map(i, 0, spectrum2.length, 0, height / 2 - 50); // Calculate the length of the line
    strokeWeight(map(spectrum2[i], 0, 255, 0.5, 5)); // Map spectrum value to stroke weight
    stroke(255, 255, 255, map(spectrum2[i], 0, 255, 50, 255)); // Map spectrum value to alpha
    line(0, 0, 0, -len); // Draw line from center outward
    rotate(360 / spectrum2.length); // Rotate for next line
  }

  pop();
}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
