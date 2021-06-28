var angle = 0;
var cam;
function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
  //cam = createCapture(VIDEO);
}

function draw() {
  background(225);
   //pointLight(100, 0, 100, 100);
  rotateX(angle);
  rotateZ(angle);
  rotateY(angle);
  //ambientMaterial(255);
  normalMaterial()
  noStroke();
  //sphere();
  box(82);
  angle += 0.01
}