

let cells = 30;
let space = cells / 10;

let capture;


function setup() {
  capture = createCapture(VIDEO);

  // if (capture.width > windowWidth || capture.height > windowHeight) {
  //     capture.resize(windowWidth, 0);
  //     if (capture.height > windowHeight) {
  //         capture.resize(0, windowHeight);
  //     } else {
  //         capture.resize(windowWidth, 0);
  //     }

  // } else {
  //     capture.resize(windowWidth, 0);
  //     if (capture.height > windowHeight) {
  //         capture.resize(0, windowHeight);
  //     } else {
  //         capture.resize(windowWidth, 0);
  //     }
  // }

  capture.size(windowWidth, windowHeight);
  capture.hide();

  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255)

  capture.loadPixels();

  for (let y = 0; y < capture.height - (cells / 2 + space); y += cells + space) {
    for (let x = 0; x < capture.width - (cells / 2 + space); x += cells + space) {


      let index = (y * capture.width + x) * 4;
      let r = capture.pixels[index];
      let g = capture.pixels[index + 1];
      let b = capture.pixels[index + 2];
      let a = capture.pixels[index + 3];



      let c = (r + g + b) / 3;

      let mapW = map(c, 0, 255, cells / 2.2, 0)

      stroke(0);
      strokeWeight(mapW)
      // fill(r, g, b);
      noFill();

      let circ = map(mapW, cells, 0, 0, cells)

      ellipse(x + (cells / 2 + space), y + (cells / 2 + space), circ, circ);





      // let mapR = map(r, 0, 255, cells / 6, 0)
      // let mapG = map(g, 0, 255, cells / 6, 0)
      // let mapB = map(g, 0, 255, cells / 6, 0)

      // stroke(255, 0, 0);
      // strokeWeight(mapR)
      // // fill(r, g, b);
      // noFill();


      // let circR = map(mapR, cells, 0, 0, cells)

      // ellipse(x + (cells / 2 + space), y + (cells / 2 + space), circR, circR);



      // stroke(0,255,0);
      // strokeWeight(mapG)

      // let circG = map(mapG, cells, 0, 0, cells*(4/6))

      // ellipse(x + (cells / 2 + space), y + (cells / 2 + space), circG, circG);




      // stroke(0,0,255);
      // strokeWeight(mapB)

      // let circB = map(mapB, cells, 0, 0, cells*(2/6))

      // ellipse(x + (cells / 2 + space), y + (cells / 2 + space), circB, circB);





      // ellipse(x, y, mapW/cells, mapW/cells);

    }
  }
  capture.updatePixels();
}




// function keyTyped() {
//   if (key == 'o') {
//     let d=new Date();
//     save(d+".svg")
//     noLoop();
//   }
// }





