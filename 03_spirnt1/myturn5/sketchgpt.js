let capture; // Declare a variable to hold the video capture

function setup() {
  // Create a canvas with initial dimensions
  createCanvas(windowWidth, windowHeight);
  
  // Initialize the video capture
  capture = createCapture(VIDEO);
  capture.size(640, 480); // Set the size of the video capture
  capture.hide(); // Hide the video capture
  
  // Resize the canvas initially to fit the window
  fitCaptureToWindow();
}

function draw() {
  // Draw the video capture centered on the canvas
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2);
}

function windowResized() {
  // If the window is resized, fit the capture to the new window size
  fitCaptureToWindow();
}

function fitCaptureToWindow() {
  // Calculate the aspect ratio of the capture
  let aspectRatio = capture.width / capture.height;
  
  // Determine whether to resize based on width or height
  if (width / height > aspectRatio) {
    // If the canvas width is wider than the capture, resize based on height
    capture.size(height * aspectRatio, height);
  } else {
    // Otherwise, resize based on width
    capture.size(width, width / aspectRatio);
  }
}