function instructionsHandler() {
	console.log('-- action: instructions --');
	console.log('instructions:', typeof instructions, '\n', instructions);
	alert(instructions);
}

const instruction = document.getElementById('instruction');
instruction.addEventListener('click', instructionsHandler);
