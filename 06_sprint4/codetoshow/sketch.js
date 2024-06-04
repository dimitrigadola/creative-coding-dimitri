let S1
let S2
let S3
let S4
let S5
let S6
let S7
let S8
let S9
let S10
let S11
let S12


let song;
let fft;

let fr, r, r2;
let ro;


function preload() {
  S1 = loadSound('assets/5.1_mandela_cut.mp3');
  S2 = loadSound('assets/5.2_kolisi_cut2.mp3');
  S3 = loadSound('assets/1.1_trump_cut.mp3');
  S4 = loadSound('assets/1.2_thunberg_cut.mp3');
  S5 = loadSound('assets/2.1_queen_cut.mp3');
  S6 = loadSound('assets/2.2_charles_cut.mp3');
  S7 = loadSound('assets/3.1_weidel_cut2.mp3');
  S8 = loadSound('assets/3.2_benediktXVI_cut2.mp3');
  S9 = loadSound('assets/4.1_lai_cut2.mp3');
  S10 = loadSound('assets/4.2_jinping_cut3.mp3');
  S11 = loadSound('assets/6.1_swift_cut.mp3');
  S12 = loadSound('assets/6.2_butker_cut.mp3');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT(0, 64);
  ro = 0;
  fr = 8;
  background(255);

  console.log(S1.duration());
  console.log(S2.duration());
  console.log(S3.duration());
  console.log(S4.duration());
  console.log(S5.duration());
  console.log(S6.duration());
  console.log(S7.duration());
  console.log(S8.duration());
  console.log(S9.duration());
  console.log(S10.duration());
  console.log(S11.duration());
  console.log(S12.duration());

  let b1 = createButton('Nelson');
  b1.position((width / 2) - 620, height - 40);
  let b2 = createButton('Siya');
  b2.position((width / 2) - 550, height - 40);
  let b3 = createButton('Donald');
  b3.position((width / 2) - 390, height - 40);
  let b4 = createButton('Greta');
  b4.position((width / 2) - 320, height - 40);
  let b5 = createButton('Elizabeth');
  b5.position((width / 2) - 160, height - 40);
  let b6 = createButton('Charles');
  b6.position((width / 2) - 75, height - 40);
  let b7 = createButton('Alice');
  b7.position((width / 2) + 103, height - 40);
  let b8 = createButton('Papst Benedikt');
  b8.position((width / 2) + 160, height - 40);
  let b9 = createButton('Lai');
  b9.position((width / 2) + 350, height - 40);
  let b10 = createButton('Xi Jinping');
  b10.position((width / 2) + 390, height - 40);
  let b11 = createButton('Taylor');
  b11.position((width / 2) + 510, height - 40);
  let b12 = createButton('Harrsion');
  b12.position((width / 2) + 570, height - 40);
  // Call repaint() when the button is pressed.
  b1.mousePressed(fb1);
  b2.mousePressed(fb2);
  b3.mousePressed(fb3);
  b4.mousePressed(fb4);
  b5.mousePressed(fb5);
  b6.mousePressed(fb6);
  b7.mousePressed(fb7);
  b8.mousePressed(fb8);
  b9.mousePressed(fb9);
  b10.mousePressed(fb10);
  b11.mousePressed(fb11);
  b12.mousePressed(fb12);
}

function draw() {
  let spectrum = fft.analyze();
  let spectrum2 = spectrum.reverse();
  angleMode(DEGREES);
  push();
  translate(width / 2, height / 2 - 36);
  rotate(ro);
  for (let i = 0; i < spectrum2.length; i++) {
    noStroke();
    fill(0, 0, 0);
    // fill(255, 108, 47)
    let size = height / 2 - 100
    let w = map(i, 0, spectrum2.length, 0, size);
    let c = size / spectrum2.length
    let s = map(spectrum2[i], 0, 255, 0, c);
    ellipse(0, w, s, s);
  }
  pop();
  ro += r;
}

function fb1() {
  userStartAudio();
  fft.setInput(S1);
  if (S1.isPlaying()){
    S1.stop();
  } else {
  S1.play();
  }
  S2.stop();
  S3.stop();
  S4.stop();
  S5.stop();
  S6.stop();
  S7.stop();
  S8.stop();
  S9.stop();
  S10.stop();
  S11.stop();
  S12.stop();
  ro = 0;
  fr = 16;
  r = 360 / (S1.duration() * fr);
  frameRate(fr);
  background(255);
}
function fb2() {
  userStartAudio();
  fft.setInput(S2);
  S1.stop();
  if (S2.isPlaying()){
    S2.stop();
  } else {
  S2.play();
  }
  S3.stop();
  S4.stop();
  S5.stop();
  S6.stop();
  S7.stop();
  S8.stop();
  S9.stop();
  S10.stop();
  S11.stop();
  S12.stop();
  ro = 0;
  fr = 16;
  r = 360 / (S2.duration() * fr);
  frameRate(fr);
  background(255);
}
function fb3() {
  userStartAudio();
  fft.setInput(S3);
  S1.stop();
  S2.stop();
  if (S3.isPlaying()){
    S3.stop();
  } else {
  S3.play();
  }
  S4.stop();
  S5.stop();
  S6.stop();
  S7.stop();
  S8.stop();
  S9.stop();
  S10.stop();
  S11.stop();
  S12.stop();
  ro = 0;
  fr = 24;
  r = 360 / (S3.duration() * fr);
  frameRate(fr);
  background(255);
}
function fb4() {
  userStartAudio();
  fft.setInput(S4);
  S1.stop();
  S2.stop();
  S3.stop();
  if (S4.isPlaying()){
    S4.stop();
  } else {
  S4.play();
  }
  S5.stop();
  S6.stop();
  S7.stop();
  S8.stop();
  S9.stop();
  S10.stop();
  S11.stop();
  S12.stop();
  ro = 0;
  fr = 30;
  r = 360 / (S4.duration() * fr);
  frameRate(fr);
  background(255);
}
function fb5() {
  userStartAudio();
  fft.setInput(S5);
  S1.stop();
  S2.stop();
  S3.stop();
  S4.stop();
  if (S5.isPlaying()){
    S5.stop();
  } else {
  S5.play();
  }
  S6.stop();
  S7.stop();
  S8.stop();
  S9.stop();
  S10.stop();
  S11.stop();
  S12.stop();
  ro = 0;
  fr = 24;
  r = 360 / (S5.duration() * fr);
  frameRate(fr);
  background(255);
}
function fb6() {
  userStartAudio();
  fft.setInput(S6);
  S1.stop();
  S2.stop();
  S3.stop();
  S4.stop();
  S5.stop();
  if (S6.isPlaying()){
    S6.stop();
  } else {
  S6.play();
  }
  S7.stop();
  S8.stop();
  S9.stop();
  S10.stop();
  S11.stop();
  S12.stop();
  ro = 0;
  fr = 24;
  r = 360 / (S6.duration() * fr);
  frameRate(fr);
  background(255);
}
function fb7() {
  userStartAudio();
  fft.setInput(S7);
  S1.stop();
  S2.stop();
  S3.stop();
  S4.stop();
  S5.stop();
  S6.stop();
  if (S7.isPlaying()){
    S7.stop();
  } else {
  S7.play();
  }
  S8.stop();
  S9.stop();
  S10.stop();
  S11.stop();
  S12.stop();
  ro = 0;
  fr = 24;
  r = 360 / (S7.duration() * fr);
  frameRate(fr);
  background(255);
}
function fb8() {
  userStartAudio();
  fft.setInput(S8);
  S1.stop();
  S2.stop();
  S3.stop();
  S4.stop();
  S5.stop();
  S6.stop();
  S7.stop();
  if (S8.isPlaying()){
    S8.stop();
  } else {
  S8.play();
  }
  S9.stop();
  S10.stop();
  S11.stop();
  S12.stop();
  ro = 0;
  fr = 24;
  r = 360 / (S8.duration() * fr);
  frameRate(fr);
  background(255);
}
function fb9() {
  userStartAudio();
  fft.setInput(S9);
  S1.stop();
  S2.stop();
  S3.stop();
  S4.stop();
  S5.stop();
  S6.stop();
  S7.stop();
  S8.stop();
  if (S9.isPlaying()){
    S9.stop();
  } else {
  S9.play();
  }
  S10.stop();
  S11.stop();
  S12.stop();
  ro = 0;
  fr = 24;
  r = 360 / (S9.duration() * fr);
  frameRate(fr);
  background(255);
}
function fb10() {
  userStartAudio();
  fft.setInput(S10);
  S1.stop();
  S2.stop();
  S3.stop();
  S4.stop();
  S5.stop();
  S6.stop();
  S7.stop();
  S8.stop();
  S9.stop();
  if (S10.isPlaying()){
    S10.stop();
  } else {
  S10.play();
  }
  S11.stop();
  S12.stop();
  ro = 0;
  fr = 60;
  r = 360 / (S10.duration() * fr);
  frameRate(fr);
  background(255);
}
function fb11() {
  userStartAudio();
  fft.setInput(S11);
  S1.stop();
  S2.stop();
  S3.stop();
  S4.stop();
  S5.stop();
  S6.stop();
  S7.stop();
  S8.stop();
  S9.stop();
  S10.stop();
  if (S11.isPlaying()){
    S11.stop();
  } else {
  S11.play();
  }
  S12.stop();
  ro = 0;
  fr = 16;
  r = 360 / (S11.duration() * fr);
  frameRate(fr);
  background(255);
}
function fb12() {
  userStartAudio();
  fft.setInput(S12);
  S1.stop();
  S2.stop();
  S3.stop();
  S4.stop();
  S5.stop();
  S6.stop();
  S7.stop();
  S8.stop();
  S9.stop();
  S10.stop();
  S11.stop();
  if (S12.isPlaying()){
    S12.stop();
  } else {
  S12.play();
  }
  ro = 0;
  fr = 16;
  r = 360 / (S12.duration() * fr);
  frameRate(fr);
  background(255);
}