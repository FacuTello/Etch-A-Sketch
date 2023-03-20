const container = document.querySelector('.grid-container');


for (let i = 1; i <= 256; i++) {
	const item = document.createElement('div');
	item.classList.add('grid-item');
	container.appendChild(item);
};

const pixels = document.querySelectorAll('.grid-item');
let isClick = "";



function mouseDown() {
	// Agregar clase solo al elemento clickeado
	this.classList.add('background-black');
	isClick = true;
}

function mouseUp() {
	if (isClick) {
		isClick = false;
	}

}

function mouseOut() {
	if (isClick) {
		this.classList.add('background-black');
	}
}

function mouseMove() {
	if (isClick) {
		this.classList.add('background-black');
	} else {

	}
}

function click() {
	this.classList.add('background-black');
}

function dblClick(){
	this.classList.remove('backgorund-black');
}

for (let a = 0; a < pixels.length; a++) {
	// Agregar evento click a cada elemento
	pixels[a].addEventListener('mousedown', mouseDown);
	pixels[a].addEventListener('mousemove', mouseMove);
	pixels[a].addEventListener('mouseup', mouseUp);
	pixels[a].addEventListener('click', click);
	
}

reziseBtn = document.querySelector('#resize-Blackboard');

function changeBlackboard() {
	let number = prompt("¿Cuantos pixeles por lado necesita?", "");
	pxTotal = 480 / parseInt(number);
	container.style.gridTemplateColumns = "repeat(" + parseInt(number) + ", " + pxTotal + "px)";
	container.style.gridTemplateRows = "repeat(" + parseInt(number) + ", " + pxTotal + "px)";
	totalGridItems = number * number;
	for (let x = 0; x < totalGridItems; x++) {
		let newItem = document.createElement('div');
		newItem.classList.add('new-grid-item');
		container.appendChild(newItem);
	};

const newPixels = document.querySelectorAll('.new-grid-item');
for (let y = 0; y < newPixels.length; y++) {
	// Agregar evento click a cada elemento
	newPixels[y].addEventListener('mousedown', mouseDown);
	newPixels[y].addEventListener('mousemove', mouseMove);
	newPixels[y].addEventListener('mouseup', mouseUp);
	newPixels[y].addEventListener('click', click);
	
};
};


reziseBtn.addEventListener('click', changeBlackboard);

function newBlackboard() {
	for (let b = 0; b < pixels.length; b++) {
		pixels[b].classList.remove('background-black');
	};
	const newPixels = document.querySelectorAll('.new-grid-item');
	for (let y = 0; y < newPixels.length; y++) {
		// Agregar evento click a cada elemento
		newPixels[y].classList.remove('background-black');
	};

};

btnEraserAll = document.querySelector('#eraserAll');
btnEraserAll.addEventListener('click', newBlackboard);




    
    