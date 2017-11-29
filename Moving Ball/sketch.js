//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_NoiseCircle

//Setup of variables
let size = 50;
let x = 0;
frameRate(30);

function setup() {
  createCanvas(400, 400)
}

function draw() {
background(120);

x = x +1;
  if (x > 400){
      x = 0;
  }
fill(255);
ellipse(x, height/2, size, size);


}
