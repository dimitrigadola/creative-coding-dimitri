let img;

// Load the image.
function preload() {
  img = loadImage('img/img1.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(50);

  // Draw the image.
  image(img, 10, 10);
}