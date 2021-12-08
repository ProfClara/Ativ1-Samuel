class Tronco extends ClasseBase{
  constructor(x,y,height,angle){
    super(x,y,50,50,angle);
    this.image = loadImage("bola.png");
    Matter.Body.setAngle(this.body, angle);
  }
}