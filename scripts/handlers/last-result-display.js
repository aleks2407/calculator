console.log('--- loading: display lastResult');

function displayLastResultHandler() {
	'use strict';
	debugger;
	console.log('-- action: display lastResult');
	console.log('lastResult:', typeof lastResult, '\n', lastResult);

	alert(`lastResult: ${lastResult}`);
}

const display = document.getElementById('display');

display.addEventListener('click', displayLastResultHandler);
