
let 	numOfSquares= 55;

function 	drawSquares()
{
	let squareSize = 600/numOfSquares;
	let grid = document.querySelector(".grid");

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