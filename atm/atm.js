class Bill
{
	constructor(value, amount)
	{
		this.value = value;
		this.amount = amount;
	}
}

function giveMoney()
{
	var t = document.getElementById("money");
	var q = t.value;
	if (q == "")
	{
		alert("Ask for an amount of money!");
		return;
	}
	money = parseInt(t.value);
	if (money == 0)
	{
		alert("0 is not an amount");
		return;
	}
	if (money % 10 != 0)
	{
		alert("Ask for only for multiples of 10");
		return;
	}
	for(var bi of atm)
	{
		if (money > 0)
		{
			div = Math.floor(money / bi.value);
			if (div > bi.amount)
				papers = bi.amount;
			else
				papers = div;
			given.push(new Bill(bi.value, papers));
			money -= (bi.value * papers);
		}
	}
	if (money > 0)
		result.innerHTML = "I am a poor ATM! <br/>";
	else
		for (var g of given)
			if (g.amount > 0)
				result.innerHTML += g.amount + " given bills of $" + g.value + "<br/>";
}

var atm = [];
var given = [];
atm.push(new Bill(50, 10));
atm.push(new Bill(20, 10));
atm.push(new Bill(10, 10));

var money = 0;
var div = 0;
var papers = 0;

var result = document.getElementById("result")
var b = document.getElementById("extract");
b.addEventListener("click", giveMoney);