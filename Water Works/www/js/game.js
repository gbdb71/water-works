var x = -100;
var titleXTo = 0;
function setup() {
    x=-windowHeight/2;
    titleXTo=windowWidth/2;
    createCanvas(windowWidth, windowHeight);
}

var width,height;
var toX = 0;
var page = 1;
var crateY = -50;
var crateR = 0;
var crateYAccl = 5;
var crateRAccl = 0.05;
var titleX = -200;
var crateS = 100;
var cratePaused = true;
var hintLineFade = 0;
var score = 0;
var scoreFade = 0;
var scoreFadeTo = 0;
var mouseIsClicked = false;
function game() {
    background(229,209,196);
    fill(247, 245, 230);
    strokeWeight(4);
    stroke(103,103,103,hintLineFade);
    noFill();
    for(var i = 0; i < width; i+=40) {
        line(i,height*(3/4-1/7),i+20,height*(3/4-1/7));
    }
    stroke(103,103,103);
    strokeWeight(13);
    push();
    translate(0,-x);
    line(width*3/16,height*3/4,width*13/16,height*3/4);
    for(var i = 1; i < 4; i++) {
        line(width*i/4,height*3/2,width*i/4,height*3/4);
        if(i<3) {
            for(var j = 0; j < 6; j++) {
                line(width*i/4,height*3/4+width*(j)/4,width*(i+1)/4,height*3/4+width*(j+1)/4);
                line(width*i/4,height*3/4+width*(j+1)/4,width*(i+1)/4,height*3/4+width*(j)/4);
            } 
        }
    }
    pop();
    //line(width/2,height-x,width/2,height*3/4-x);
    noStroke();
    fill(103, 174, 202,90);
    rect(0,height*27/32+14,width,height);
    beginShape();
    vertex(0, height*27/32+14);
    curveVertex(0, height*27/32+14);
    //curveVertex(width*0/5, height*27/32+7*sin((frameCount+-60)/15));
    curveVertex(width*1/5, height*27/32+7*sin((frameCount+0)/15));
    curveVertex(width*2/5, height*27/32+7*sin((frameCount+60)/15));
    curveVertex(width*3/5, height*27/32+7*sin((frameCount+120)/15));
    curveVertex(width*4/5, height*27/32+7*sin((frameCount+180)/15));
    //curveVertex(width*5/5, height*27/32+7*sin((frameCount+240)/15));
    curveVertex(width, height*27/32+14);
    vertex(width, height*27/32+14);
    endShape();
    push();
    noStroke();
    fill(103,103,103);
    translate(width/2,crateY);
    rotate(crateR);
    rect(-crateS/2,-crateS/2,crateS,crateS);
    if(titleXTo===-width) {
        hintLineFade+=(60-hintLineFade)/10;
        scoreFadeTo=130;
    }
    if(!cratePaused) {
        x+=(toX-x)/4;
        crateYAccl+=0.01;
        crateY+=crateYAccl;
        crateR+=crateRAccl;
    } else {
    }
    if(crateY+crateS*sqrt(2)/2>=height*3/4-x) {
        //crateY=-50;
        //crateR=0;
        //crateYAccl=5;
        //crateRAccl=0.1;
        cratePaused=true;
        crateY+=((height*3/4-x-crateS/2)-crateY)/4;
        var diff=min((crateR*180/PI)%(90),90-((crateR*180/PI))%(90));
        diff=(crateR*180/PI)%(90);
        //alert(diff);
        if(abs(diff)<25) {
            if(diff===(crateR*180/PI)%(90)) {
                crateR+=((crateR-diff*PI/180)-crateR)/4;
            } else {
                crateR+=((crateR+90-diff*PI/180)-crateR)/4;
            }
            if(abs(diff)<5) {
                crateY=-50;
                crateR=0;
                crateYAccl=5;
                crateRAccl=0.1;
                score++;
                cratePaused=false;
            }
        } else {
            scoreFadeTo=500;
            if(mouseIsClicked&&scoreFade>470) {
                crateY=-50;
                scoreFadeTo=0;
                crateR=0;
                crateYAccl=5;
                crateRAccl=0.1;
                score=0;
                cratePaused=false;
            }
        }
    }
    pop();
    fill(103);
    textSize(120);
    textFont("sans-serif");
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    text("WATER", titleX, height*22/64);
    text("WORKS", titleX, height*31/64);
    titleX+=(titleXTo-titleX)/10;
    fill(103,103,103,scoreFade);
    textSize(100);
    textFont("sans-serif");
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    text(score, width/2, height*22/64);
    fill(103,103,103,scoreFade-130);
    textSize(30);
    textFont("sans-serif");
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    text("TAP TO PLAY AGAIN", width/2, height*28/64);
    scoreFade+=(scoreFadeTo-scoreFade)/10;
}

function draw() {
    width = windowWidth;
    height = windowHeight;
    switch(page) {
        case 1:
            game();
            break;
    }
    mouseIsClicked = false;
}
function touchEnded() {
    toX=0;
    // prevent default
    return false;
}
function touchStarted() {
    mouseIsClicked=true;
    if(titleXTo!==-width) {
        titleXTo=-width;
        cratePaused=false;
    } else {
        toX=height/7;
    }
    // prevent default
    return false;
}
