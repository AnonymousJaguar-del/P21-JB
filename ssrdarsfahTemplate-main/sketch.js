var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
  music = loadSound("music.mp3");``
}


function setup(){
    canvas = createCanvas(600,400);

    block1 = createSprite(70, 390, 360, 30);
    block1.scale = 0.4;
    block1.shapeColor = "blue";

    block2 = createSprite(220, 391, 360, 30);
    block2.scale = 0.4;
    block2.shapeColor = "orange";

    block3  = createSprite(370, 391, 360, 30);
    block3.scale = 0.4;
    block3.shapeColor = "red";

    block4  = createSprite(520, 391, 360, 30);
    block4.scale = 0.4;
    block4.shapeColor = "green";

    ball = createSprite(300, 200);
    ball.scale = 0.3;
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 3;
    ball.velocityY = -5;
}

function draw() {
    background(rgb(1,40,50));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        
        music.stop();
        
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
