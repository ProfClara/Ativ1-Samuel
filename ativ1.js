const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bolinha, raquete, corda;

function preload() {
    bolaImg = loadImage("bola.png");
    raqueteImg = loadImage("raquete.png");
    
}

function setup() {
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    raquete = new Raquete(250,250);
    bola = new Tronco(50,200,100, PI/2);
    corda = new Chain(raquete.body,bola.body);

}

function draw() {
    background("orange");
    Engine.update(engine);
    strokeWeight(4);

    raquete.display();
    bola.display();
    corda.display();    


}