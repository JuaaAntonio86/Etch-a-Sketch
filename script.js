const container = document.getElementById("container");
const resetButton = document.getElementById("resetButton");
const slider = document.getElementById('slider');
const checkbox = document.getElementById('myCheckbox');

checkbox.addEventListener('change', function () {
	clearGrid();
	drawGrid(checkbox.checked);  // Pass true or false based on checkbox state
});

function clearGrid() {
	container.innerHTML = '';  // Clear the container before drawing a new grid
}

function drawGrid(flag) {
	const value = slider.value / 5;  // Adjust cell size based on slider value

	for (let j = 0; j < 696; j += value) {  // Adjust the grid rows based on cell size
		const linediv = document.createElement("div");
		linediv.classList.add("rowcell");

		for (let i = 0; i < 496; i += value) {  // Adjust the grid columns based on cell size
			const ndiv = document.createElement("div");
			ndiv.classList.add("cell");
			ndiv.style.width = value + 'px';   // Set width of cell
			ndiv.style.height = value + 'px';  // Set height of cell
			ndiv.dataset.increment = 255;

			// Apply border based on the flag
			if (flag) {
			ndiv.style.borderStyle = "solid";
			ndiv.style.borderWidth = "0.1px";
			} else {
			ndiv.style.borderStyle = "none";
			}
			// Mouseover event to change color of cells
			ndiv.addEventListener('mouseenter', function () {
				mouseover(this);
			});
			linediv.appendChild(ndiv);
			}
	container.appendChild(linediv);
	}
}

// Mouseover effect to darken the cell
function mouseover(element) {
	let increment = parseInt(element.dataset.increment);

	if (increment > 0) {
		increment -= 60;
		element.style.backgroundColor = `rgb(${increment}, ${increment}, ${increment})`;
		element.dataset.increment = increment;  // Update the increment value
	}
}

// Event listener for reset button to clear the grid colors
resetButton.addEventListener("click", function () {
	clearDiv();
	slider.value = 50;
	clearGrid();
	drawGrid(checkbox.checked);
});

// Function to reset the grid colors to white
function clearDiv() {
	const allDivs = document.querySelectorAll(".cell");

	allDivs.forEach((ndiv) => {
		ndiv.style.backgroundColor = "white";
		ndiv.dataset.increment = 255;
	});
}

// Event listener for the slider to adjust the grid size dynamically
slider.addEventListener('input', function () {
	clearGrid(); 
	drawGrid(checkbox.checked);  
});

// Initial grid setup
drawGrid(checkbox.checked);