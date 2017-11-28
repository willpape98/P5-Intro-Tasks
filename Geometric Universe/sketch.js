//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//06_Exercise02 - Geometric Universe
function setup() {
  createCanvas(1000, 1000);
strokeWeight(8);
noLoop();
noFill();

}

function draw() {
  background(50);
  //Create 300 shares using the for-loop
  for (var i = 0; i < 300; i++) {
  	//...code here
    push();

      translate(random(width),random(height));
      rotate(random(2*PI));
      scale(random(1.5),random(1.5));
      stroke(random(255),random(255),random(255));
      ellipse(0,0,40,40);
    pop();

  }
}
