'use strict';

console.log('--- loading: reset lastResult');

function resetLastResultHandler() {
	debugger;
	console.log('\n--- action: reset lastResult ---');
	console.log('lastResult (before):', typeof lastResult, '\n', lastResult);

	lastResult = 0;
	document.getElementById('result').innerHTML = lastResult;
	console.log('lastResult (after):', typeof lastResult, '\n', lastResult);

	//displayLastResultHandler();
}

const reset = document.getElementById('reset');

reset.addEventListener('click', resetLastResultHandler);
