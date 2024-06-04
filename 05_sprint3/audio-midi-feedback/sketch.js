let mic;
let midi_out;
let midi_enabled = false

let img;

function preload() {
  img = loadImage('assets/img1.png');
}


function setup() {
  let cnv = createCanvas(innerWidth, innerHeight - 10, WEBGL);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
  // ******************************************
  // ******************************************
  // ATTENTION IT CAN CREATE FEEDBACK!!!!!!
  mic.connect();
  // ******************************************
  // ******************************************
  fft = new p5.FFT(0.8, 128);
  fft.setInput(mic)


  // ******************************************
  // ******************************************
  // initialize midi 
  init_midi()
  // ******************************************
  // ******************************************
}


function draw() {
  background(0);
  // ******************************************
  // ******************************************
  // MIDI
  if (midi_enabled) {
    // within this if statement you can 
    // send midi notes and cc values
    if (frameCount % 20 === 0) {
      const value = floor(random(128))
      
      send_note(value, 500)

      const value2 = abs(floor(sin(frameCount* 0.01) * random(128)))
      send_cc(value2, 0);
    }
  }
  // ******************************************
  // ******************************************

  let spectrum = fft.analyze();
  let level1 = spectrum[1];
  let level2 = spectrum[4];





  // text('tap to start', width / 2, 20);
  micLevel = mic.getLevel();
  // let y = height - micLevel * height * 20;
  // ellipse(width / 2, y, 10, 10);


  lights()
  strokeWeight(1)
  noStroke()
  // ambientMaterial(200,20,20)
  // specularMaterial(100,200,20)
  texture(img)

  rotateX(+ map(level1, 0, 255, 0, 2 * PI))
  box(100 + level2)

  // sphere(100 + micLevel * 5000);
  sphere(3000)




  // ******************************************
  // ******************************************
  // FFT analysis
  // let spectrum = fft.analyze();
  // let waves = fft.waveform()
  // noStroke();
  // fill('#3f3')
  // for (let i = 0; i < spectrum.length; i++) {
  //   let x = map(i, 0, spectrum.length, 0, width);
  //   let h = -height + map(spectrum[i], 0, 255, height, 0);
  //   rect(x, height, width / spectrum.length, h)
  // }
  // beginShape()

  // noFill()
  // stroke('#f3f')
  // strokeWeight(3)
  // for (let i = 0; i < waves.length; i++) {
  //   let x = map(i, 0, waves.length, 0, width);
  //   let y = map(waves[i], -1, 1, 0, height)
  //   vertex(x, y)
  // }
  // endShape()
  // ******************************************
  // ******************************************
}


function send_cc(value, cc) {
  const val = parseInt(abs(value)) % 128
  midi_out.sendControlChange(cc, value);
  // console.log(`send midi cc: ${val}`);
}
function send_note(note, duration) {
  midi_out.playNote(note, { duration });
  // console.log(`send midi note: ${note}`);
}


// ******************************************
// ******************************************
// MIDI FUNCTIONS!
function init_midi() {
  WebMidi
    .enable()
    .then(onEnabled)
    .catch(err => alert(err));

  function onEnabled() {
    // Display available MIDI input devices
    if (WebMidi.outputs.length < 1) {
      console.log("No device detected.");
    } else {
      WebMidi.outputs.forEach((device, index) => {
        console.log(`${index}: ${device.name}`);
      });
      // midi_out = WebMidi.outputs[0].channels[1]
      create_buttons()
    }
  }
}

function create_buttons() {
  for (let i = 0; i < WebMidi.outputs.length; i++) {
    const midi = WebMidi.outputs[i];
    let btn = createButton(midi.name);
    btn.position(50, 40 * (i + 1));
    btn.mousePressed(() => {
      midi_out = midi.channels[1];
      console.log(`midi port selected: ${midi.name}`);
      removeElements()
      midi_enabled = true
    })
  }
}
// ******************************************
// ******************************************