//1. Draw your own sprite instead of the ball and make sure you use classes.
//2. Make the sprite bounce off both in x and y direction
//3. Create 50 sprites that are randomly bouncing off the walls. 
class Triangle{
  constructor(x,y,size,triColor,speed){ //speed is used for a unchanging speed vairable, inital speedX, and inital speedY. Color is gotten from an array of possible colors.
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
    
    if(this.x > width - this.size|| this.x < 0){ //walls
      this.speedX = -1 * this.speedX;
      this.speedY = -abs(this.speedY*1.3);
    }
    
    if(this.y < 0+ this.size){ //top
      if(abs(this.speedY) <= abs(this.speed*2)){
      this.speedY = -1 * this.speedY
      }
      else this.speed  = this.speed * 0.7;
      this.speedX = 0
      
    }
    if(this.y > height){ //bottom
       this.speedX =  (this.x + this.size/2 - width/2)/this.speed/15 //changes X speed depending on how close the center of the triangle is to the center of the screen when it hits the bottom, similar to a Breakout paddle.
      this.speedY = -this.speedY;
    }
  }

    
}
function setup() {
  createCanvas(800, 800);
  frameRate(35)
  colors = ["pink","hotpink","lightblue","tan","rgb(168,255,223)","yellow","rgb(192,140,255)"]
  triangles = []
  for(trisDrawn = 0;trisDrawn < 50; trisDrawn++){
    triangles.push(new Triangle(
      random(80,width - 80),
      random(80,height - 80),
      random(30,100),
      random(colors),
      random(-4,4))
    )
    
    print(triangles)
  }
}

function draw() {
  background(220);
  for( trisShown = 0; trisShown < triangles.length - 1; trisShown++){
    triangles[trisShown].show();
    triangles[trisShown].move();
  }
}
