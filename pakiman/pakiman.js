var images = [];
images["Cowmon"] = "cow.png";
images["Pokacho"] = "chicken.png";
images["Piglet"] = "pig.png";

class Pakiman
{
	constructor(n, hp, at)
	{
		this.image = new Image();
		this.name = n;
		this.healtP = hp;
		this.attack = at;
		this.image.src = images[this.name];
	}
	speak()
	{
		alert(this.name);
	}
	show()
	{
		document.body.appendChild(this.image);
		document.write("<br><strong>" + this.name + "</strong><br>");
		document.write("Health Points: " + this.healtP + "<br>");
		document.write("Attack: " + this.attack + "<hr>");
	}
}

var collection = [];

collection.push(new Pakiman("Cowmon", 100, 30));
collection.push(new Pakiman("Pokacho", 80, 50));
collection.push(new Pakiman("Piglet", 120, 40));

for(var paki of collection)
{
	paki.show();
}