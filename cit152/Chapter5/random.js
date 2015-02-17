/*
 *	Chapter 5 random.js
 *	Author: David Lopez
 */

function showNumbers() {
    'use strict';

    // Variable to store the lucky numbers:
    var numbers = '';

	// Get the numbers:
    for (var i = 0; i < 6; i++) {
        numbers += parseInt((Math.random() * 100), 10) + ' ';
    }

    // Show the numbers:
	var output = document.getElementById('output');
	if (output.textContent !== undefined) {
		output.textContent = numbers;
	} else {
		output.innerText = numbers;
	}

} // End of showNumbers() function.

// Initial setup:
window.onload = showNumbers;