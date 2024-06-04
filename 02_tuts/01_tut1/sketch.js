let redSlider;

function setup() {
  createCanvas(500, 500);
  

  redSlider = createSlider(0,255)
  redSlider.position(30,30)
}

function draw() {
  let r = redSlider.value();

  background(200, 40, 100);
  
  frameRate(16)

  let d = 20
  let h = random(10,30)

  let dd = sin(frameCount/10);

  let ddd = map(dd,-1,1,40,80);

  fill(255,10);
  ellipse(mouseX, mouseY, ddd, r);
}
