var v = document.getElementById("village");
var paper = v.getContext("2d");

var c = random(0, 5);

var backG = {
	url: "./images/tile.png",
	loadOK: false
};

var cow = {
	url: "./images/cow.png",
	loadOK: false
};

var pig = {
	url: "./images/pig.png",
	loadOK: false
};

var chicken = {
	url: "./images/chicken.png",
	loadOK: false
};

backG.image = new Image();
backG.image.src = backG.url;
backG.image.addEventListener("load", loadBackG);

chicken.image = new Image();
chicken.image.src = chicken.url;
chicken.image.addEventListener("load", loadChicken);

cow.image = new Image();
cow.image.src = cow.url;
cow.image.addEventListener("load", loadCow);

pig.image = new Image();
pig.image.src = pig.url;
pig.image.addEventListener("load", loadPig);

function loadBackG()
{
	backG.loadOK = true;
	draw();
}

function loadCow()
{
	cow.loadOK = true;
	draw();
}

function loadChicken()
{
	chicken.loadOK = true;
	draw();
}

function loadPig()
{
	pig.loadOK = true;
	draw();
}

function draw()
{
	if (backG.loadOK)
		paper.drawImage(backG.image, 0, 0);
	if (cow.loadOK)
	{
		for (var i = 0; i < c; i++)
		{
			var x = random(0, 7);
			var y = random(0, 10);
			x = x * 60;
			y = y * 40;
			paper.drawImage(cow.image, x, y);
		}
	}
	if (chicken.loadOK)
	{
		for (var i = 0; i < c; i++)
		{
			var x = random(0, 7);
			var y = random(0, 7);
			x = x * 60;
			y = y * 60;
			paper.drawImage(chicken.image, x, y);
		}
	}
	if (pig.loadOK)
	{
		for (var i = 0; i < c; i++)
		{
			var x = random(0, 7);
			var y = random(0, 7);
			x = x * 60;
			y = y * 60;
			paper.drawImage(pig.image, x, y);
		}
	}
}

function random(min, maxi)
{
	var result;
	result = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return result;
}
