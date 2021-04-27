"use strict"

function createBackgroundGrid() {
	let context = document.getElementById("background-grid").getContext("2d");
	const LINE_TYPES = 3;
	const beginPos = [0.5, 50.5, 0.5];
	const step     = [10,  100,  100];
	const style    = ["rgb(210,210,210)", "rgb(150,150,150)", "rgb(0,0,0)"];
	
	function handler() {
		context.canvas.width  = document.documentElement.clientWidth;
		context.canvas.height = document.documentElement.clientHeight;
		
		context.fillStyle = "rgb(245, 245, 245)";
		context.fillRect(0, 0, context.canvas.width, context.canvas.height);
		
		for (let lineType = 0; lineType < LINE_TYPES; ++lineType)
			for (let dir = 0; dir < 2; ++dir) {
				context.beginPath()
				context.strokeStyle = style[lineType];
				let index = beginPos[lineType];
				if (dir == 0)
					while (index < context.canvas.width) {
						context.moveTo(index, 0);
						context.lineTo(index, context.canvas.height);
						index += step[lineType];
					}
				else
					while (index < context.canvas.height) {
						context.moveTo(0, index);
						context.lineTo(context.canvas.width, index);
						index += step[lineType];
					}
				context.stroke();
			}
		
		const colShift = 5, rowShift = 10;
		
		context.fillStyle = "blue";
		let col = 0;
		while (col + colShift < context.canvas.width) {
			context.fillText(col, col + colShift, 0 + rowShift);
			col += step[step.length - 1];
		}
		
		context.fillStyle = "red";
		let row = 0 + step[step.length - 1];
		while (row + rowShift < context.canvas.height) {
			context.fillText(row, 0 + colShift, row + rowShift);
			row += step[step.length - 1];
		}
	}
	handler();
	window.addEventListener("resize", () => requestAnimationFrame(handler));
}

createBackgroundGrid();

























