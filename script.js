// p5.js functions
/* global
 *    HSB, background, color, colorMode, createCanvas, ellipse, fill, height, line, mouseIsPressed,
 *    mouseX, mouseY, rect, stroke, strokeWeight, width, randomHue, randomSaturation, random,
 */

let brushHue, brushSaturation, brushBrightness, previousMouseX, previousMouseY;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);

  strokeWeight(6);

  // Reset the screen in the beginning / when key is pressed.
  resetScreen();
  //frameRate(10);
  previousMouseX = mouseX;
  previousMouseY = mouseY;
}

// JavaScript function to clear the p5 canvas and resets the paint color.
function resetScreen() {
  background(95);
  brushHue = 0;
  brushSaturation = 50;
  brushBrightness = 80;
}

function draw() {
  chooseColors();

  if (mouseIsPressed) {    
    line(previousMouseX, previousMouseY, mouseX, mouseY);
    line(width-previousMouseX, previousMouseY, width-mouseX, mouseY);
    line(previousMouseX, height-previousMouseY, mouseX, height-mouseY);
    line(width-previousMouseX, height-previousMouseY, width-mouseX, height-mouseY);
    
    line(previousMouseY, previousMouseX, mouseY, mouseX);
    line(width-previousMouseY, previousMouseX, width-mouseY, mouseX);
    line(previousMouseY, height-previousMouseX, mouseY, height-mouseX);
    line(width-previousMouseY, height-previousMouseX, width-mouseY, height-mouseX);
    
  }
  
  previousMouseX = mouseX;
  previousMouseY = mouseY;
}

/* A function that sets the stroke and fill of the paint brush. */
function chooseColors() {
  gradientHue();
  randomHue();  
  randomSaturation();
  gradientSaturation();


  stroke(brushHue, brushSaturation, brushBrightness);
  fill(brushHue, randomSaturation, brushBrightness);
}

// Functions to set different values for Hue.
function gradientHue() {
  brushHue += 17;
  if (brushHue >= 360) {
    brushHue %= 360;
  }
}

function randomHue() {
  brushHue = random(360);
}

// Functions to set different values for Saturation.

function gradientSaturation() {
  brushSaturation += 1;
  if (brushSaturation >= 80) {
    brushSaturation = 20;
    // brushSaturation = (brushSaturation-20) % 60 + 20;
  }
}

function randomSaturation() {
  brushSaturation = random(20, 80);
  //brushSaturation = random(60) + 20;
  // brushSaturation = random() * 60 + 20;
}

// P5 function for the keyPress event.
function keyPressed() {
  // keyCode stores the ASCII value of the key that was pressed.
  // console.log(keyCode);
  resetScreen();
}
