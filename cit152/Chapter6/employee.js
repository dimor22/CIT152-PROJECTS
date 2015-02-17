/*
 *	Chapter 6 employee.js
 *	Author: David Lopez
 */
 
 function process() {
    'use strict';

    // Get form references:
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var department = document.getElementById('department').value;

    // Reference to where the output goes:
    var output = document.getElementById('output');

    // Create a new object:
	var employee = {
	    firstName: firstName,
	    lastName: lastName,
	    department: department,
	    hireDate: new Date()
	}; 
	
	console.log(employee);

    // Create the ouptut as HTML:
    var message = '<h2>Employee Added</h2>Name: ' + employee.lastName + ', ' + employee.firstName + '<br>';
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
    document.getElementById('employeeForm').onsubmit = process;
} // End of init() function.
window.onload = init;