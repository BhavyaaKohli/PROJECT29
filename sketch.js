const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var ground1
// 1 pyramid
var box1 , box2,box3,box4,box5,box6,box7, box8
var box9 , box10,box11,box12,box13 ,box14
var box15 , box16 , box17, box18
var box19 ,box20
var box30

//2 pyramid
var box21, box22 , box23 , box24 , box25
var  box26 , box27 ,box28
var box29

// polygon
var polygon


function preload() {
 


}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(530,325,300,20);
    box1 = new Box (420,295,30,40)
    box2 = new Box (450,295,30,40)
    box3 = new Box (480,295,30,40)
    box4 = new Box (510,295,30,40)
    box5 = new Box (540,295,30,40)
    box6 = new Box (570,295,30,40)
    box7 = new Box (600,295,30,40)
    box8 = new Box (630,295,30,40)

    box9 = new Box (450,255,30,40)
    box10 = new Box (480,255,30,40)
    box11 = new Box (510,255,30,40)
    box12 = new Box (540,255,30,40)
    box13 = new Box (570,255,30,40)
    box14 = new Box (600,255,30,40)
    
    box15 = new Box (480,215,30,40)
    box16 = new Box (510,215,30,40)
    box17 = new Box (540,215,30,40)
    box18 = new Box (570,215,30,40)

    box19 = new Box (510,175,30,40)
    box20 = new Box (540,175,30,40)

    box30 = new Box (525,135,30,40)

    // 2nd Pyramid
    ground1 = new Ground(960,185,200,20 )
    box21 = new Box (900,160,30,40)
    box22 = new Box (930,160,30,40)
    box23 = new Box (960,160,30,40)
    box24 = new Box (990,160,30,40)
    box25 = new Box (1020,160,30,40)
    
    box26 = new Box (930,120,30,40)
    box27 = new Box (960,120,30,40)
    box28 = new Box (990,120,30,40)

    box29 = new Box (960,80,30,40)


    polygon = new Polygon (50,200,20)

}


function draw(){
    background("black");
    Engine.update(engine);
   ground.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
box30.display()

box21.display()
box22.display()
box23.display()
box24.display()
box25.display()
box26.display()
box27.display()
box28.display()
box29.display()
ground1.display()

polygon.display()

}

