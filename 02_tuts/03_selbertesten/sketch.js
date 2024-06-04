function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}



function draw() {
  frameRate(0)
  noFill();



  for (let ny = -height; ny <= height; ny += 10) {

    beginShape();
    let nOff = random(100);


    for (let x = 0; x <= width; x++) {


      let gradient = drawingContext.createLinearGradient(0,0,width,height)
      gradient.addColorStop(0, color(20,10,200));
      gradient.addColorStop(1, color(20,10,200));


      let c = map(ny, 0, height, 100, 255)

      stroke(c, -c+255, 200);
      strokeWeight(4)


      let nx = map(x, 0, width, 0, 3);
      let y = ny + (height * noise(nx + nOff));
      vertex(x, y);
    }
    endShape();
  }
}

