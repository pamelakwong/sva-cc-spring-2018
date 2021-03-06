// A wind direction vector
var wind;
// Circle position
var position;
var backgroundColor = 0;

// temperature
var temp;

function setup() {
  createCanvas(400, 400);
  // Request the data from apixu.com
  var url = 'https://api.apixu.com/v1/current.json?key=513d8003c8b348f1a2461629162106&q=NYC';
  loadJSON(url, gotWeather);
  // Circle starts in the middle
  position = createVector(width/2, height/2);
  // wind starts as (0,0)
  wind = createVector();
}

function draw() {

  backgroundColor = temp;

  if (backgroundColor < 0){
    background(backgroundColor);
  } else if(backgroundColor > 0 && backgroundColor < 30){
    background(255-backgroundColor);
  } else if (backgroundColor > 30 && backgroundColor < 60){
    background(0, 0, 255-backgroundColor);
  } else if (backgroundColor > 60 && backgroundColor > 100){
    background(255-backgroundColor, 0, 0);
  }


  //background(0, 0, backgroundColor);

  // This section draws an arrow pointing in the direction of wind
  push();
  translate(32, height - 32);
  // Rotate by the wind's angle
  rotate(wind.heading() + PI/2);
  noStroke();
  fill(255);
  ellipse(0, 0, 48, 48);

  stroke(45, 123, 182);
  strokeWeight(3);
  line(0, -16, 0, 16);

  noStroke();
  fill(45, 123, 182);
  triangle(0, -18, -6, -10, 6, -10);
  pop();

  // Move in the wind's direction
  position.add(wind);

  stroke(0);
  fill(51);
  ellipse(position.x, position.y, 16, 16);

  if (position.x > width) {
    position.x = 0;
  }
  if (position.x < 0) {
     position.x = width;
  }
  if (position.y > height) {
    position.y = 0;
  }

  if (position.y < 0){
    position.y = height;
  }

}


function gotWeather(weather) {

  // Get the angle (convert to radians)
  var angle = radians(Number(weather.current.wind_degree));
  // Get the wind speed
  var windmag = Number(weather.current.wind_mph);

  // Display as HTML elements
  temp = weather.current.temp_f;

  var temperatureDiv = createDiv(floor(temp) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");

  // Make a vector
  wind = p5.Vector.fromAngle(angle);

  console.log(temp);



}
