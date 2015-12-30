var canvas = document.getElementById("theCanvas");
var ctx = canvas.getContext("2d");
var myImageData = ctx.createImageData(canvas.width, canvas.height);
generateImage(ctx, myImageData);

function generateImage(ctx, myImageData) {
    var max = 1000;
    for (var row = 0; row < myImageData.height; row++) {
        for (var col = 0; col < myImageData.width; col++) {
            var i = (col - myImageData.width/2.0)*4.0/myImageData.width;
            var j = (row - myImageData.height/2.0)*4.0/myImageData.width;
            var x = 0;
            var y = 0;
            var iteration = 0;
            while (x*x+y*y <= 4 && iteration < max) {
                var z = x*x - y*y + i;
                y = 2*x*y + j;
                x = z;
                iteration++;
            }
            if (iteration < max) {
                plot(row, col, determineColor(iteration, max), myImageData);
            }
            else {
                plot(row, col, 10, myImageData);
            }
        }
    }
    ctx.putImageData(myImageData, 0, 0);
}

function plot(row, col, color, myImageData) {
    var x = (row * myImageData.width + col) * 4;
    var data = myImageData.data;
    data[x] = color[0];
    data[x+1] = color[1];
    data[x+2] = color[2];
    data[x+3] = 255;
}

function determineColor(iteration, max) {
    var rgb = [255, 255, 255];
    var i = (iteration * 255 / max);
    rgb[0] = Math.round(Math.sin(0.5 * i + 1) * 127 + 128);
    rgb[1] = Math.round(Math.sin(0.5 * i + 3) * 127 + 128);
    rgb[2] = Math.round(Math.sin(0.5 * i + 6) * 127 + 128);
    return rgb;
}
