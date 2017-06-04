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
var crateYAccl = 0;
var crateRAccl = 0.100;
var titleX = -200;
var crateS = 50;
var hintLineFade = 0;
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
    x+=(toX-x)/4;
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
    fill(181, 99, 87);
    translate(width/2,crateY);
    rotate(crateR);
    rect(-crateS/2,-crateS/2,crateS,crateS);
    crateY+=crateYAccl;
    crateR+=crateRAccl;
    if(titleXTo===-width) {
        hintLineFade+=(60-hintLineFade)/10;
        crateYAccl+=0.01;
    }
    if(crateY+crateS*sqrt(2)>=height*3/4-x) {
        //crateY=-50;
        //crateR=0;
        crateYAccl=5;
        crateRAccl=0.1;
    }
    pop();
    fill(103);
    textSize(100);
    textFont("sans-serif");
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    text("WATER", titleX, height*22/64);
    text("WORKS", titleX, height*31/64);
    titleX+=(titleXTo-titleX)/10;
}

function draw() {
    width = windowWidth;
    height = windowHeight;
    switch(page) {
        case 1:
            game();
            break;
    }
}
function touchEnded() {
    toX=0;
    // prevent default
    return false;
}
function touchStarted() {
    if(titleXTo!==-width) {
        titleXTo=-width;
        crateYAccl = 5;
    } else {
        toX=height/7;
    }
    // prevent default
    return false;
}
