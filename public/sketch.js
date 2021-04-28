var canvas;

function setup(){
    angleMode(DEGREES);
    
    canvas = createCanvas(600, 300);
    canvas.position(0,3);

}

function draw(){
    translate(width/2, height/2);
    line(-100, 30, 280, 30);
}