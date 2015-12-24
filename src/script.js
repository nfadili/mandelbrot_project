var canvas = document.getElementById("theCanvas");
var ctx = canvas.getContext("2d");
var myImageData = ctx.createImageData(canvas.width, canvas.height);

generateBackground(ctx, myImageData);


//broken! doesnt go all the way down the canvas. plot() isnt determined by anything
//it jsut acts in a predictable way.
function generateBackground(ctx, myImageData) {
    var thingy = 0;
    var data = myImageData.data;
    for (var i = 0; i < data.length; i += 4) {
        plot(data, i, thingy);
        thingy += 101;
    }
    ctx.putImageData(myImageData, 0, 0);
}

function plot(data, x, thingy) {
    data[x] = x * thingy % 255;
    data[x + 1] = 0;
    data[x + 2] = 0;
    data[x + 3] = 255;
}
