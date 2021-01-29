var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,580,200,40)
    surface1.shapeColor = "blue"
    surface2 = createSprite(300,580,200,40)
    surface2.shapeColor = "orange"
    surface3 = createSprite(500,580,200,40)
    surface3.shapeColor = "red"
    surface4 = createSprite(700,580,200,40)
    surface4.shapeColor = "green"

    //create box sprite and give velocity
    box = createSprite(random(20,750),100,30,30)
    box.shapeColor = "white"
    box.velocityX = 10
    box.velocityY = 10
}

function draw() {
    background(0,0,0);
    //create edgeSprite
    edges = createEdgeSprites();

    box.bounceOff(edges[0])
    box.bounceOff(edges[1])
    box.bounceOff(edges[2])
    box.bounceOff(edges[3])

    if(surface1.isTouching(box) && box.bounceOff(surface1)) {
        box.shapeColor = "blue"
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)) {
        box.shapeColor = "orange"
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)) {
        box.shapeColor = "red"
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)) {
        box.shapeColor = "green"
    }



    //add condition to check if box touching surface and make it box
    drawSprites();
}
