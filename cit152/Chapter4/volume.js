/*
 *	Chapter 4 volume.js
 *	Author: David Lopez
 */
 
function calculate() {
	'use strict';
	
	// For storing the volume:
	var volume;
    
    // Get a reference to the form value:
    var radius = document.getElementById('radius').value;
    var height = document.getElementById('height').value;

	// Make sure it's positive:
	radius = Math.abs(radius);
	height = Math.abs(height);
	
	// Perform the calculation:
	volume = (height/3) * Math.PI * Math.pow(radius, 2);

	// Format the volume:
	volume = volume.toFixed(2);
	
	// Display the volume:
	document.getElementById('volume').value = volume;
	
	// Return false to prevent submission:
	return false;
    
} // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
	'use strict';
	document.getElementById('volumeForm').onsubmit = calculate;
} // End of init() function.
window.onload = init;