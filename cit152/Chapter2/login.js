/*
 *	Chapter 2 Login.js
 *	Author: David Lopez
 */
 
 
 function validateForm() {
    'use strict';
    
    // Get references to the form elements:
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    // Validate!
    if ( (email.value.length > 0) && (password.value.length > 0) ) {
        return true;
    } else {
        alert('Please complete the form!');
        return false;
    }
    
}

function init() {
    'use strict';

    // Confirm that document.getElementById() can be used:
    if (document && document.getElementById) {
        var loginForm = document.getElementById('loginForm');
        loginForm.onsubmit = validateForm;
    }

}

// Assign an event listener to the window's load event:
window.onload = init;
