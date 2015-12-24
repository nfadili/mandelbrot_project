var canvas = document.getElementById("theCanvas");
var ctx = canvas.getContext("2d");
var myImageData = ctx.createImageData(canvas.width, canvas.height);

generateBackground(ctx, myImageData);


//broken! doesnt go all the way down the canvas. plot() isnt determined by anything
//it jsut acts in a predictable way.
function generateBackground(ctx, myImageData) {
    var corna = 0;
    var cornb = 0;
    var side = 11;
    var data = myImageData.data;
    for (var i = 0; i < data.length; i+=myImageData.width*4) {
        for (var j = i; j < myImageData.width*4; j+=4) {
            // var x = (corna + i) * side % myImageData.height;
            // var y = (cornb + j) * side % myImageData.width;
            // var c = Math.round(Math.pow(x, 2) + Math.pow(y, 2));

            var c = corna + i % data.length;
            if (c % 2 === 0) {
                plot(data, i, j);
            }
            corna++;
            cornb++;
        }
    }
    myImageData.data = data;
    ctx.putImageData(myImageData, 0, 0);
}

function plot(data, x, y) {
    //console.log(y);
    data[y] = 255;
    data[y + 1] = 0;
    data[y + 2] = 255;
    data[y + 3] = 255;
}
