class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,60,60);
    this.image = loadImage("polygon.png");
  }

  display() {
    /*this.body.position.x = mouseX;
    this.body.position.y = mouseY;*/
    super.display();
  }
}
