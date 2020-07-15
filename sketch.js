const INIT_SPEED=4


var p1,p2
var p1V=0
var p2V=0
var ball,ballV
var ps1,ps2
function setup(){
    createCanvas(600,400)
    p1=height/2-50
    p2=height/2-50
    ball=createVector(width/2,height/2)
    ballV=createVector(random(-1,1),random(-1,1))
    ballV.setMag(INIT_SPEED); // set the speed to 3
    ps1=ps2=0
    textAlign(CENTER);
    textSize(30);
    fill(255);
}

function draw(){
    background(51)

    //Drawing of paddle
    rect(10,p1,10,100)
    rect(width-30,p2,10,100)

    ellipse(ball.x,ball.y,20)
    

    //Scoreboard Draw
    text(ps1 + "  |  " + ps2, width / 2, 50);

    handleMovement()
    handleBall()
}

function handleBall(){

    ball.x+=ballV.x
    ball.y+=ballV.y

    //top bottom collisions
    if (ball.y>height || ball.y<0){
        ballV.y*=-1
    }

    //Out of bound left side
    if (ball.x<10){
        ps2+=1
        reset()
        return
    }

    //Out of bound right side
    if (ball.x>width-20){
        ps1+=1
        reset()
        return
    }

    //paddle collision
    if (ball.x<20 && ball.x>10){
        //leftpaddle
        if (ball.y>p1 && ball.y<p1+100){
            ballV.x*=-1
        }
    }
    else if (ball.x>width-30 && ball.x<width-20){
        //rightpaddle
        if (ball.y>p2 && ball.y<p2+100){
            ballV.x*=-1
        }
    } 



}

function handleMovement(){

    //For player 1 W S
    if (keyIsDown(87)){
        //W up move
        p1V-=5
    }
    else if(keyIsDown(83)){
        //S down move
        p1V+=5
    } 

    //For player 2 ArrowKeys
    if (keyIsDown(UP_ARROW)){
        //up arrow up move
        p2V-=5
    }
    else if(keyIsDown(DOWN_ARROW)){
        //down arrow down move
        p2V+=5
    }

    p1V*=0.4
    p2V*=0.4

    p1+=p1V
    p2+=p2V

    //Limitations for paddles
    p1=constrain(p1,0,height-100)
    p2=constrain(p2,0,height-100)

}

function reset() {

    ballV= createVector(random(-1,1),random(-1,1))
    ballV.setMag(INIT_SPEED)
    ball = createVector(width / 2, height / 2); // center
  }




