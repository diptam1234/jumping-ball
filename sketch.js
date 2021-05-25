var canvas;
var music;
var wall1;
var wall2;
var wall3;
var wall4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);

    wall1=createSprite(40,550,300,40);
    wall1.shapeColor="red";
    wall2=createSprite(350,550,220,40);
    wall2.shapeColor="blue";
    wall3=createSprite(620,550,220,40);
    wall3.shapeColor="yellow";
    wall4=createSprite(890,550,220,40);
    wall4.shapeColor="purple";


   box=createSprite(50,50,50,50);
   box.shapeColor="brown";
   box.velocityX = 5;
   box.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);

    
    //add condition to check if box touching surface and make it box

    if (wall1.isTouching(box)&& box.bounceOff(wall1)){
        box.shapeColor="red";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();  
    }

    if (wall2.isTouching(box)){
        box.shapeColor="blue";
        music.play();
    }

    if (wall3.isTouching(box)&& box.bounceOff(wall3)){
        box.shapeColor="yellow";
        music.play();
    }

    if (wall4.isTouching(box)&& box.bounceOff(wall4)){
        box.shapeColor="purple";
        music.play();
    }


    createEdgeSprites();

    drawSprites();
}
