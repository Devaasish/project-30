const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot, img, img1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    base1 = new Ground(360,480,210,10);
    base2 = new Ground(700,310,210,10);
    base3 = new Ground(200,310,210,10);

     //base 1 levels

    //level 3
    block1 = new Block(275,450,40,50);
    block2 = new Block(317,450,40,50);
    block3 = new Block(359,450,40,50);
    block4 = new Block(401,450,40,50);
    block5 = new Block(443,450,40,50);

    //level 2
    block6 = new Block(317,399,40,50);
    block7 = new Block(359,399,40,50);
    block8 = new Block(401,399,40,50);

    //level 1
    block9 = new Block(359,347,40,50);


    // base 2 levels

    //level 3
    block10 = new Block(616,280,40,50);
    block11 = new Block(657,280,40,50);
    block12 = new Block(698,280,40,50);
    block13 = new Block(739,280,40,50);
    block14 = new Block(781,280,40,50);

    //level 2
    block15 = new Block(657,229,40,50);
    block16 = new Block(698,229,40,50);
    block17 = new Block(739,229,40,50);

    //level 1
    block18 = new Block(698,177,40,50);

    bird = new Bird(170,170);

    slingShot = new Slingshot(bird.body, {x:200, y:200});

    //chain = new Chain(bird.body,log6.body);
}

function draw(){
    background(0);
    text("Tip: Press Space to get second chance to play", 800, 50)

    Engine.update(engine);
    strokeWeight(4);
    ground.display();

    base1.display();
    base2.display();
    base3.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    bird.display();
    slingShot.display();
    //chain.display();    
}

function mouseDragged() {
    Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
    slingShot.fly();
}

function keyPressed(){
    if (keyCode === 32) {
        slingShot.attach(bird.body);
    }
}