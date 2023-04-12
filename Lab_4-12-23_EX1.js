//1. Draw your own sprite instead of the ball and make sure you use classes.
class Triangle{
  constructor(x,y,size,triColor){
    this.x = x;
    this.y = y;
    this.size = size;
    this.triColor = triColor;
  }
  show(){
    push();
    fill(this.triColor);
    translate(this.x,this.y);
    triangle(0,0,0 +this.size,0,0+(this.size/2),0-this.size);
    pop();
  }

    
  
}
function setup() {
  createCanvas(400, 400);
  tri = new Triangle(200,200,100,"green");
}

function draw() {
  background(220);
  tri.show();
}
