var canvas = document.getElementById("theCanvas");
var ctx = canvas.getContext("2d");

for (var i = 0; i < 5000; i++) {
    for (var j = 0; j < 5000; j++) {
        if ((i % 1233) === 0 && (j % 31) === 0) {
            ctx.beginPath();
            ctx.moveTo(i, j);
            ctx.lineTo((i + 100) % 500,(j + 100) % 500);
            ctx.stroke();
        }
    }
}
