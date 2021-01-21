class Block extends BaseClass {
  constructor(x, y, width, height){

    super(x,y,width,height);
    this.image = loadImage("2.jpg");
  }

  display(){
    console.log(this.body.speed);
    if(this.body.speed > 7){
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255, this.visibility); // Apply transparency without changing color
      image(this.image, 0, 0, this.width, this.height);
      pop();
    } else {
      super.display();
    }
  }
};