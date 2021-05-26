var sc, scangle;
var hr, hrangle;
var da,daangle;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
}

function draw() {
  background(220);
  translate(200,200)
  rotate(-90)
  
  sc = second();
  scAngle = map(sc, 0, 60, 0, 360);
  hr = second();
  hrAngle = map(hr,0,3600,0,360);
  da = second();
  daAngle = map(da,0,43200,0,360);

  push();
  rotate(scAngle); 
  stroke("green");
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  push();
  rotate(hrAngle);
  stroke("lightBlue");
  strokeWeight(7);
  line(0,0,130,0);
  pop();

  push();
  rotate(daAngle);
  stroke("orange");
  strokeWeight(7);
  line(0,0,70,0);
  pop();

  strokeWeight(10);
  noFill();  
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
}