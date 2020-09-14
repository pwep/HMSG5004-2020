let capture;
let slider;
let threshold;
let checkbox;
let p;

var w = 640;
var h = 480;

function setup() {
  createCanvas(w, h);
  slider = createSlider(0, 255, 127);
  slider.position(15, h+60);
  slider.style('width', ''+(w-20)+'px');

  checkbox = createCheckbox('Activate Threshold', true);
  p = createP("hello");

  p.html(slider.value());

  capture = createCapture(VIDEO);
  capture.size(w,h);
  capture.hide();
}

function draw() {

  background(127);
  image(capture, 0, 0, w, h);
  filter(GRAY);
  if(checkbox.checked() == true)
  {
    let val = slider.value();
    filter(THRESHOLD, val/255);
  }
  p.html(slider.value());
}

