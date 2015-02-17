/*
 *	Chapter 5 Membership.js
 *	Author: David Lopez
 */
 

function calculate() {
    
    // Be strict:
    'use strict';

    // Variable to store the total cost:
    var cost;

    // Get a reference to the form elements:
    var type = document.getElementById('type');
    var years = document.getElementById('years');
    
    // Convert the year to a number:
    if (years && years.value) {
        years = parseInt(years.value, 10);
    }
    
    // Check for valid data: 
   if (type && type.value && years && (years > 0) ) {
        
        // Determine the base cost:
        switch (type.value) {
            case 'basic':
                cost = 10.00;
                break;
            case 'premium':
                cost = 15.00;
                break;
            case 'gold':
                cost = 20.00;
                break;
            case 'platinum':
                cost = 25.00;
                break;
        } // End of switch.
        
        // Factor in the number of years:
        cost *= years;
        
        
        
    /**
      *
      *	This following if-else accounts for Part 2 of Chapter 5
      *	Pursue point 2
      *
      */
        
        
        // Discount multiple years:
        if (years > 1 && years < 4) {
            cost *= .9; // 10%
        }else if(years == 4){
	        cost *= .85; // 15%
	       
        }else if (years > 4){
	        cost *= .8; // 20%
        }
        
    /**
      *
      *	The following two statements accounts for Part 2 of Chapter 5
      *	Pursue point 3 (I tried innerText but it didn't work)
      *
      */
        document.getElementById('cost-p').innerHTML = 'Cost = <span id="cost"></span>';

        document.getElementById('cost').textContent = '$' + cost.toFixed(2);
        
    } else { // Show an error:
        document.getElementById('cost').value = 'Please enter valid values.';
    }
    
    // Return false to prevent submission:
    return false;
    
} // End of calculate() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('membershipForm').onsubmit = calculate;
} // End of init() function.
window.onload = init;