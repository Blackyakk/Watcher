let isBlinking = false; // Flag to indicate whether the eye is currently blinking
let blinkStartTime = 0; // Timestamp of when the current blink started
let blinkDuration = 200; // Duration of each blink in milliseconds

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255); // Set the background to white
  
  // Check if the eye should be blinking
  if (isBlinking) {
    // Calculate how long the blink has been going on for
    let blinkElapsedTime = millis() - blinkStartTime;
    
    // Calculate the height of the eyelid based on how long the blink has been going on for
    let eyelidHeight = map(blinkElapsedTime, 0, blinkDuration, 0, 200);
    
    // Draw the eye with the eyelid partially closed
    fill(255); // Set the color of the eye to white
    ellipse(200, 200, 300, 300 - eyelidHeight); // Draw the eye
  } else {
    // Draw the eye with the eyelid fully open
    fill(255); // Set the color of the eye to white
    ellipse(200, 200, 300, 300); // Draw the eye
    strokeWeight(4)
  }
  
  // Calculate the position of the iris based on the position of the mouse
  let irisX = map(mouseX, 0, width, 175, 225);
  let irisY = map(mouseY, 0, height, 175, 225);
  
  // Calculate the position of the pupil based on the position of the iris
  let pupilX = map(mouseX, 0, width, 185, 215);
  let pupilY = map(mouseY, 0, height, 185, 215);
  
  // Draw the iris
  fill(0, 150, 255); // Set the color of the iris to blue
  ellipse(irisX, irisY, 200, 200); // Draw the iris
  
  // Draw the pupil
  let pupilOffsetX = pupilX - irisX; // Calculate the horizontal offset of the pupil from the center of the iris
  let pupilOffsetY = pupilY - irisY; // Calculate the vertical offset of the pupil from the center of the iris
  let pupilSize = 100 - (pupilOffsetX + pupilOffsetY) / 10; // Calculate the size of the pupil based on its offset from the center of the iris
  fill(0); // Set the color of the pupil to black
  ellipse(pupilX, pupilY, pupilSize, pupilSize); // Draw the pupil
}

function mouseClicked() {
  if (!isBlinking) { // Only start a new blink if the eye isn't already blinking
    isBlinking = true;
    blinkStartTime = millis();
    setTimeout(function() { isBlinking = false; }, blinkDuration); // Set a timeout to end the blink after the blink duration has passed
  }
}
