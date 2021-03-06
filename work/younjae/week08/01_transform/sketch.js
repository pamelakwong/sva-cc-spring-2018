var angle;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  angle = 0;
}


function draw() {
  background(200);

  var rectWidth = width;
  translate(width/2, height/2);

  var numOfRect = 50;

  for( var i = 0; i < numOfRect; i = i + 1) {
    push();
    var fi = i / numOfRect;
    rotate(fi * second());
    fill(fi * mouseX, fi * mouseY, mouseX/2);
    rect(0, 0, rectWidth, rectWidth);
    rectWidth = rectWidth - 10;
    pop();
  }

}
