var keys = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};

document.addEventListener("keydown", drawKyboard);
var area = document.getElementById("drawSection");
var paper = area.getContext("2d")
var x = 150;
var y = 150;


function drawKyboard(event)
{
	var drawColor = "blue"
	var move = 1;
	switch(event.keyCode)
	{
		case keys.UP:
			drawing(drawColor, x, y, x, y - move, paper);
			y -= move;
			break;
		case keys.DOWN:
			drawing(drawColor, x, y, x, y + move, paper);
			y += move;
			break;
		case keys.LEFT:
			drawing(drawColor, x, y, x - move, y, paper);
			x -= move;
			break;
		case keys.RIGHT:
			drawing(drawColor, x, y, x + move, y, paper);
			x += move;
			break;
	}
}
function drawing(color, x_init, y_init, xfinal, yfinal, drawArea)
{
    drawArea.beginPath();
	drawArea.strokeStyle = color;
	drawArea.lineWidth = 3;
    drawArea.moveTo(x_init,y_init);
    drawArea.lineTo(xfinal,yfinal);
    drawArea.stroke();
    drawArea.closePath();
}
