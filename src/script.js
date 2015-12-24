var canvas = document.getElementById("theCanvas");
var ctx = canvas.getContext("2d");
var myImageData = ctx.createImageData(canvas.width, canvas.height);
paint();

function paint() {
    generateBackground(ctx, myImageData);
    setTimeout(paint, 1);
}

function generateBackground(ctx, myImageData) {
    var pat1 = Math.floor(Math.random() * 100);
    var pat2 = Math.floor(Math.random() * 100);
    var data = myImageData.data;
    for (var i = 0; i < data.length; i += 4) {
        if ((pat1 + i) % 3 == 0) {
            plot1(data, i, pat1);
            pat1++;
        }
        else {
            plot2(data, i, pat2);
            pat2 += pat1;
        }
    }
    ctx.putImageData(myImageData, 0, 0);
}

function plot1(data, x, pat) {
    data[x] = x % 255;
    data[x + 1] = x * pat % 255;
    data[x + 2] = pat % 255;
    data[x + 3] = x;
}

function plot2(data, x, pat) {
    data[x] = x % 255;
    data[x + 1] = x * pat % 255;
    data[x + 2] = pat % 255;
    data[x + 3] = x;
}
