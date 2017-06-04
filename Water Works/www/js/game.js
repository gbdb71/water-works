var x = -100;
function setup() {
    x=-windowHeight/2;
    createCanvas(windowWidth, windowHeight);
}

var width,height;
var toX = 0;
var page = 1;
function game() {
    background(237, 230, 182);
    fill(247, 245, 230);
    stroke(229, 42, 111);
    noFill();
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
    x+=(toX-x)/10;
    noStroke();
    fill(103, 174, 202,90);
    rect(0,height*27/32,width,height);
    beginShape();
    curveVertex(0, height*27/32+15*sin((frameCount-30)));
    curveVertex(width*1/5, height*27/32+15*sin((frameCount+30)/5));
    curveVertex(width*2/5, height*27/32+15*sin((frameCount+30)/5));
    curveVertex(width*3/5, height*27/32+15*sin((frameCount+60)/5));
    curveVertex(width*4/5, height*27/32+15*sin((frameCount+90)/5));
    curveVertex(width, height*27/32+15*sin((frameCount+120)/5));
    endShape();
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
    toX=height/7;
    // prevent default
    return false;
}
