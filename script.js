const container = document.getElementById("container");

for(let j = 0; j < 50; j++){
	const linediv = document.createElement("div");
	linediv.classList.add("rowcell");
	for(let i = 0; i < 50; i++){
		const ndiv = document.createElement("div");
		ndiv.classList.add("cell");
		ndiv.dataset.increment = 255;
		ndiv.addEventListener('mouseenter', function() {
			mouseover(this);
		});
		linediv.appendChild(ndiv);
	}
	container.appendChild(linediv);
}

function mouseover(element) {
	let increment = parseInt(element.dataset.increment);
	if (increment > 0) {
		increment -= 60;
		element.style.backgroundColor = `rgb(${increment}, ${increment}, ${increment})`;
		element.dataset.increment = increment; // Update increment value
	}
}