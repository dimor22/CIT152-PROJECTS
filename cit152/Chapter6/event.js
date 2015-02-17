/*
 *	Chapter 6 event.js
 *	Author: David Lopez
 */
function process() {
    'use strict';

    // Get a reference to the form elements:
    var start = document.getElementById('start');
    var end = document.getElementById('end');

    // Get a reference to the paragraph:
    var output = document.getElementById('output-event');
    
    // For the output:
    var message = '';
    var interval = '';
    var day = 1000 * 60 * 60 *24;
    
    
    /**
	  *
	  *	Check if start date is in the future
	  *
	  * This is a Pursue point.
	  *
	  * I created this extra date obj to compare it to "startDate"
	  * I added an extra if-else to check startDate against nowDate
	  * and throw the corresponding error message.
	  *
	  */
	  
	  var nowDate = new Date();
    
    
    // Try to create a start and end date:
    var startDate = new Date(start.value);
    var endDate = new Date(end.value);
    
	if ( startDate.getTime() && endDate.getTime() ) {
                
        
        // Extra if-else to check start and now dates.
        if(startDate > nowDate){
        
        	// Make sure the start date comes first:
	        if (startDate < endDate) {
	            
	            // Get the interval:
	            var diff = endDate - startDate;
	
	            // Determine the interval:
	            if (diff <= day) {
	                interval = '1 day';
	            } else {
	                interval = Math.round(diff/day) + ' days';
	            }
	            
	            // Build the message:
	            message = 'The event has been scheduled starting on ' + startDate.toLocaleDateString();
	            message += ' and ending on ' + endDate.toLocaleDateString();
	            message += ', which is a period of ' + interval + '.';
	            
	        } else { // The start date doesn't come first!
	            message = 'The start date must come before the end date!';
	        }
	    } else {
		    message = 'Start date needs to be in the future';
	    }
    
    } else { // One or both dates are invalid!
        message = 'Please enter valid start and end dates in the format MM/DD/YYYY.';
    }
    
    // Update the paragraph:
	if (output.textContent !== undefined) {
		output.textContent = message;
	} else {
		output.innerText = message;
	}
        
    // Return false to prevent submission:
    return false;
    
} // End of process() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('eventForm').onsubmit = process;
} // End of init() function.
window.onload = init;