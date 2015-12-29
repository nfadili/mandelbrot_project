var canvas = document.getElementById("theCanvas");
var ctx = canvas.getContext("2d");
var myImageData = ctx.createImageData(canvas.width, canvas.height);
generateImage(ctx, myImageData);

function generateImage(ctx, myImageData) {
    var max = 10000;
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
                //console.log(determineColor(iteration));
                plot(row, col, determineColor(iteration), myImageData);
            }
            else {
                //plot(row, col, 10, myImageData);
            }
        }
    }
    ctx.putImageData(myImageData, 0, 0);
}

function plot(row, col, color, myImageData) {
    var x = (row * myImageData.width + col) * 4;
    var data = myImageData.data;
    if (color === 1) {
        data[x] = 255;
        data[x+1] = 255;
        data[x+2] = 255;
        data[x+3] = 255;
    }
    else if (color === 2) {
        data[x] = 204;
        data[x+1] = 229;
        data[x+2] = 255;
        data[x+3] = 255;
    }
    else if (color === 3) {
        data[x] = 153;
        data[x+1] = 204;
        data[x+2] = 255;
        data[x+3] = 255;
    }
    else if (color === 4) {
        data[x] = 53;
        data[x+1] = 154;
        data[x+2] = 255;
        data[x+3] = 255;
    }
    else if (color === 5) {
        data[x] = 0;
        data[x+1] = 103;
        data[x+2] = 220;
        data[x+3] = 255;
    }
    else if (color === 6) {
        data[x] = 0;
        data[x+1] = 100;
        data[x+2] = 200;
        data[x+3] = 255;
    }
    else if (color === 7) {
        data[x] = 0;
        data[x+1] = 50;
        data[x+2] = 200;
        data[x+3] = 255;
    }
    else if (color === 8) {
        data[x] = 0;
        data[x+1] = 30;
        data[x+2] = 150;
        data[x+3] = 255;
    }
    else if (color === 9) {
        data[x] = 30;
        data[x+1] = 0;
        data[x+2] = 100;
        data[x+3] = 255;
    }
    else {
        data[x] = 0;
        data[x+1] = 0;
        data[x+2] = 0;
        data[x+3] = 255;
    }
}

function determineColor(iteration) {
    if (iteration < 100) {return 1;}
    if (iteration < 200) {return 2;}
    if (iteration < 300) {return 3;}
    if (iteration < 400) {return 4;}
    if (iteration < 500) {return 5;}
    if (iteration < 600) {return 6;}
    if (iteration < 700) {return 7;}
    if (iteration < 800) {return 8;}
    if (iteration < 900) {return 9;}
    else {return 10;}
}
