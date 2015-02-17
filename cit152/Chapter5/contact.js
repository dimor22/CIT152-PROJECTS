/*
 *	Chapter 5 contact.js
 *	Author: David Lopez
 */
 
 
function process() {
    'use strict';

    // Variable to represent validity:
    var okay = true;
    
    // Get form references:
    var email = document.getElementById('email');
    var comments = document.getElementById('comments');
    
    // Validate the email address:
    if (!email || !email.value 
    || (email.value.length < 6) 
    || (email.value.indexOf('@') == -1)) {
        okay = false;
        alert('Please enter a valid email address!');
    }

    // Validate the comments:
    if (!comments || !comments.value 
    || (comments.value.indexOf('<') != -1) ) {
        okay = false;
        alert('Please enter your comments, without any HTML!');
    }
        
    // Return the status:
    return okay;
    
} // End of process() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('contactForm').onsubmit = process;
} // End of init() function.
window.onload = init;