var texto = document.getElementById("textLine");
var button = document.getElementById("but");
button.addEventListener("click", drawPerClick);


var d = document.getElementById("pic");
var lienzo = d.getContext("2d");
var width = d.width;


function drawing(color, x_init, y_init, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_init,y_init);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function drawPerClick()
{
    var lines = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    const lineas = width / lines;
    while (l < lines)
    {
        yi = lineas * l;
        xf = lineas * (l + 1);
        drawing("red", 0, yi, xf, 300);
        l += 1;
    }
    drawing("black", 0, 1, 1, 299);
    drawing("black", 0, 300, 299, 300);
}
