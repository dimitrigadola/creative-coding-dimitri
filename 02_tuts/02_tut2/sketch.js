function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  let size = 1

  stroke(255);
  noFill()

  beginShape();
  for (let x = 0; x <= width; x += size) {


	  let nx = map(x, 0, width, 0, 3);
	  let y = height * noise(nx);
    vertex(x, y);


  }
  endShape();
}



// function keyPressed(){
//   saveCanvas("aölskf", "png")
// }