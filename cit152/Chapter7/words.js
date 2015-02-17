/**
 *	Chapter 7 random.js
 *	Author: David Lopez
 */
 
 
 // Shortcut function
function $(id) {
    'use strict';
    if (typeof id != 'undefined') {
        return document.getElementById(id);
    }
}

// Function for setting text of an element
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
    } 
} 

// This function sorts a list of words.
function sortWords(max) {
    'use strict';

    // Get the words:
    var words = $('words').value;
    
    // Convert the string to an array:
    words = words.split(' ');
    
    
    
 /**
 *
 * Pursue point c.
 * Checks for map() and offers an alternative.
 *
 */
    // Sort the words:
    if( words.map ){
	    var sorted = words.map(function(value) {
	        return value.toLowerCase();
	    }).sort();
	} else {
		for(var i = 0, j = words.length; i < j; i++){
			words[i] = words[i].valueOf().toLowerCase();
		}
		words.sort();
	}
    
    // Send the output to the page:
    setText('output', sorted.join(', '));
        
    // Return false to prevent submission:
    return false;

} // End of sortWords() function.

function init() {
    'use strict';
    $('wordsForm').onsubmit = sortWords;
} // End of init() function.
window.onload = init;