function setup() { 
    rectMode(CENTER);
    let clientHeight = document.body.clientHeight; 
	let clientWidth = document.body.clientWidth;

	canvas = createCanvas(clientWidth, clientHeight); 
    canvas.position(0, 100);
    
}


function draw() {

    //make randomly placed snowflakes of different grayscales
    fill(204, 101, 192, 127);
    stroke(127, 63, 120); 
    
    translate(580, 200);
    noStroke();
    for (let i = 0; i < 10; i ++) {
     ellipse(0, 30, 20, 80);
     rotate(PI/5);
    }
    
}
