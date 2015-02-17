/*
 *	Chapter 7 random.js
 *	Author: David Lopez
 */

//Shorthand to select elements by id
function $(id) {
    'use strict';
    if (typeof id != 'undefined') {
        return document.getElementById(id);
    }
} // End of $ function.


// Preview function
function setText(elementId, message) {
    'use strict';
    if ( (typeof elementId == 'string')
    && (typeof message == 'string') ) {
        var output = $(elementId);
		if (output.textContent !== undefined) {
			output.textContent = message;
		} else {
			output.innerText = message;
		}
    } // End of main IF.
} // End of setText() function.

// This function returns a random number.
function getRandomNumber(max) {
    'use strict';
    
    // Generate the random number:
    var n = Math.random();
    
    // If a max value was provided, multiply times it,
    // and parse n to an integer:
    if (typeof max == 'number') {
        n *= max;
        n = Math.floor(n);
    }
    
    // Return the number:
    return n;

} // End of getRandomNumber() function.

// Show numbers
function showNumbers() {
    'use strict';

    // Variable to store the lucky numbers:
    var numbers = '';

    for (var i = 0; i < 6; i++) {
        numbers += getRandomNumber(100) + ' ';
    }

    // Show the numbers:
    setText('output', numbers);

} // End of showNumbers() function.
window.onload = showNumbers;