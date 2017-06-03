function setup() {
    createCanvas(windowWidth, windowHeight);
}

var x = -width/2;
var width,height;
var page = 1;
function game() {
    background(234, 198, 122);
    fill(35, 50, 55);
    stroke(152, 75, 67);
    noFill();
    strokeWeight(13);
    line(width/4,height-x,width/4,height*3/4-x);
    line(width*3/4,height-x,width*3/4,height*3/4-x);
    line(width/2,height-x,width/2,height*3/4-x);
    x+=(0-x)/10;
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
