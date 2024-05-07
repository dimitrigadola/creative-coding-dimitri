let img;
let cells = 10;
let space = cells/10;

let wid, hei;

function preload() {
  img = loadImage('img/img1.png');
}

function setup() {
  wid = windowWidth
  hei = windowHeight

  createCanvas(wid, hei);

  image(img, 0, 0, img.width, img.height);
  background(255)


}

function draw() {
  frameRate(0)

  img.loadPixels();

  for (let y = 0; y < img.height; y += cells + space) {
    for (let x = 0; x < img.width; x += cells + space) {


      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let a = img.pixels[index + 3];
      let c = (r + g + b) / 3;

      let mapW = map(c, 0, 255, cells / 2.2, 0)

      stroke(0);
      strokeWeight(mapW)
      noFill();



      let circ = map(mapW, cells, 0, 0, cells)


      ellipse(x, y, circ, circ);

      // ellipse(x, y, mapW/cells, mapW/cells);

    }
  }
  img.updatePixels();
}




// function keyTyped() {
//   if (key == 'o') {
//     let d=new Date();
//     save(d+".svg")
//     noLoop();
//   }
// }