var osc;
var env;



function setup() {
  
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.start();
  osc.freq(440);
  osc.amp(1);
  
  
  env = new p5.Env();
  env.setADSR(0.1, 001, 0.5, 0.8);
  env.setRange(1, 0);
  
}

function draw() {
  
}