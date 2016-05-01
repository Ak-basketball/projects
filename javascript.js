var myName = "BUBBLES";

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [199, 77, 55];
var purple = [280, 50, 60];
var white = [255, 255, 255];
var letterColors = [green, black, blue, purple, orange, red];

drawName(myName, letterColors);

if(10 < 6)
{
    bubbleShape = 'square';
}
else
{
    bubbleShape = 'circle';
}

bounceBubbles();
