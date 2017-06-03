function setup() {
    createCanvas(windowWidth, windowHeight);
}

var x = 0;
var width,height;
var page = 1;
function game() {
    background(234, 198, 122);
    fill(35, 50, 55);
    ellipse(width/2, x, 100, 100);
    x+=(height/2-x)/10;
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
