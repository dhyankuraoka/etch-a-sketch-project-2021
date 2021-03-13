//creating a target place on body
const atBody = document.querySelector('#container');


//initial number of squares
let sideSquare = 10; 

 //creating grid css on container
document.getElementById('container').style.gridTemplateColumns = `repeat(${sideSquare},50px)`;


//create the box's on container


createBox(sideSquare);


let boxes = document.getElementsByClassName('box');

//add the color change to the boxes.
addColorChange();


//create a button to reset and setup the grid by user.
const resetBtn = document.querySelector('#resetButton');
resetButton.addEventListener('click', () =>{
	//take the desired grid size.
	let gridSize = prompt('Give me the grid definition');

	//reset the grid.
	document.getElementById('container').innerHTML = "";

	//create the new grid.
	createBox(gridSize);

	//calculate the specifications on box size to fit the standard screeen size.
	let boxSize = 500/gridSize;
	let borderSize = (boxSize/20);
 	let boxes = document.getElementsByClassName('box');

	for(let i=0; i<boxes.length; i++) {
		boxes[i].style.height = `${boxSize}px`;
		boxes[i].style.width = `${boxSize}px`;
		//boxes[i].style.border = `${borderSize}px solid black`;
	};
	document.getElementById('container').style.gridTemplateColumns = `repeat(${gridSize},${boxSize}px)`

	addColorChange();


});

//function to add the color change to each box.
function addColorChange() {
	for(let i=0; i<boxes.length; i++) {
		boxes[i].addEventListener("mouseover", function(event) {
	  		event.target.style.backgroundColor = "red";
	  		setTimeout(function() {
	    		event.target.style.backgroundColor = "black";
	  				}, 500);
		}, false);
	 }
}

//creates the boxes on container.
function createBox(number) {
	for(let i=0; i< number*number; i++) {
		const square = document.createElement('div'); 
		square.classList.add('box');
		atBody.appendChild(square);	
	}
}

