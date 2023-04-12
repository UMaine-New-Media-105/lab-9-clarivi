//1. Draw your own sprite instead of the ball and make sure you use classes.
//2. Make the sprite bounce off both in x and y direction
class Triangle{
  constructor(x,y,size,triColor,speed){
    this.x = x;
    this.y = y;
    this.size = size;
    this.triColor = triColor;
    this.speed = speed;
    this.speedX = speed;
    this.speedY = speed;
  }
  show(){
    push();
    fill(this.triColor);
    translate(this.x,this.y);
    triangle(0,0,0 +this.size,0,0+(this.size/2),0-this.size);
    pop();
  }
  move(){
    
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    if(this.x > width - this.size|| this.x < 0){
      this.speedX = -1 * this.speedX;
      this.speedY = -abs(this.speedY);
    }
    if(this.y < 0+ this.size){
      this.speedY = -1 * this.speedY
      this.speedX = 0
    }
    if(this.y > height){
      this.speedX =  (this.x + this.size/2 - width/2)/this.speed/15 //changes X speed depending on how close the center of the triangle is to the center of the screen when it hits the bottom, similar to a Breakout paddle.
      print(this.speedX)
      this.speedY = -this.speedY;
    }
  }

    
  
}
function setup() {
  createCanvas(400, 400);
  tri = new Triangle(200,200,100,"green",2);
}

function draw() {
  background(220);
  tri.show();
  tri.move();
}
