function setup() {
    createCanvas(windowWidth, windowHeight);
}

var width,height;
var x = -100;
var page = 1;
function game() {
    background(247, 245, 230);
    fill(247, 245, 230);
    stroke(99, 115, 118);
    noFill();
    strokeWeight(13);
    push();
    translate(0,x);
    line(width*3/16,height*3/4,width*13/16,height*3/4);
    for(var i = 1; i < 4; i++) {
        line(width*i/4,height*3/2,width*i/4,height*3/4);
    }
    pop();
    //line(width/2,height-x,width/2,height*3/4-x);
    x+=(0-x)/10;
}

function draw() {
    width = windowWidth;
    height = windowHeight;
    x=-0;
    switch(page) {
        case 1:
            game();
            break;
    }
}
