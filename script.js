function removeAllSquares(){
	let parent = document.querySelector(".grid");
	while (parent.firstChild)
		parent.removeChild(parent.firstChild);
}

function 	drawSquares(numOfSquares)
{
	let squareSize = 600/numOfSquares;
	let grid = document.querySelector(".grid");
	removeAllSquares();
	for (let i = 0; i < numOfSquares; i++)
	{
		for (let x = 0; x < numOfSquares; x++)
		{
			let div = document.createElement("div");
			div.classList.add("square");
			div.style.cssText = `width: ${squareSize}px; height: ${squareSize}px; box-sizing: border-box;`;
			grid.append(div);
		}
	}
}

function changeGridSize()
{
	let input = prompt("Please enter the number of squares Max 64 Min 16:");
	if (input === null) { 
		return;
	  }
	let numOfSquares = parseInt(input);
	if (numOfSquares === NaN)
	{
		alert("Error the input should be a number");
		reset();
		return;
	}
	else if (numOfSquares > 64 || numOfSquares < 16)
	{
		alert("Error the input should be a number between 16 and 64");
		reset();
		return;
	}
	drawSquares(numOfSquares);
}

function reset()
{
	removeAllSquares();
	drawSquares(16);
}

document.addEventListener("DOMContentLoaded" ,function(){}) 
{
	drawSquares(16);
}