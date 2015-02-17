/**
 *	Chapter 7 employee.js
 *	Author: David Lopez
 */
 
 
 
 
/**
 *
 * Pursue point d.
 * Adds $() function.
 *
 */
 function $(id){
	 'use strict';
    if (typeof id != 'undefined') {
        return document.getElementById(id);
    }
 }
 
 function process() {
    'use strict';

    // Get form references:
    var firstName = $('firstName').value;
    var lastName = $('lastName').value;
    var department = $('department').value;

    // Reference to where the output goes:
    var output = $('output');

    // Create a new object:
	var employee = {
	    firstName: firstName,
	    lastName: lastName,
	    department: department,
	    hireDate: new Date(),
	    getName: function(){
		    return this.lastName + ', ' + this.firstName;
	    }
	}; 
	
	console.log(employee);

    // Create the ouptut as HTML:
    var message = '<h2>Employee Added</h2>Name: ' + employee.getName() + '<br>';
    message += 'Department: ' + employee.department + '<br>';
    message += 'Hire Date: ' + employee.hireDate.toDateString();
    
    // Display the employee object:
    output.innerHTML = message;
        
    // Return false:
    return false;
    
} // End of process() function.

// Initial setup:
function init() {
    'use strict';
    $('employeeForm').onsubmit = process;
} // End of init() function.
window.onload = init;