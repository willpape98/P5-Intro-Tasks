//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_NoiseCircle

//Setup of variables
let size = 50;
let x = 0;
let y = 0;
frameRate(30);

function setup() {
  createCanvas(400, 400)
}

function draw() {
background(120);

x = x +3;
y = y +3;
  if (x > width || y > height) {
      x = random(0, 400);
      y = 0;
  }
fill(255);
ellipse(x, y, size, size);
}
