function setup() {
    createCanvas(windowWidth, windowHeight);
}

var width,height;
var x = -100;
var page = 1;
function game() {
    background(247, 245, 230);
    fill(247, 245, 230);
    stroke(255, 106, 92);
    noFill();
    strokeWeight(13);
    line(width/4,height-x,width/4,height*3/4-x);
    line(width*3/4,height-x,width*3/4,height*3/4-x);
    line(width/2,height-x,width/2,height*3/4-x);
    //line(width/2,height-x,width/2,height*3/4-x);
    x+=(0-x)/10;
}

function draw() {
    width = windowWidth;
    height = windowHeight;
    x=-height/2;
    switch(page) {
        case 1:
            game();
            break;
    }
}
