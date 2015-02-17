/**
 * Created by david lopez on 2/13/15.
 * Chapter 9 popups
 */



// Function called when the link is clicked.
function createPopup(e) {
    'use strict';

    // Get the event object:
    if (typeof e == 'undefined') var e = window.event;

    // Get the event target:
    var target = e.target || e.srcElement;

    // Create the window:
    var popup = window.open(target.href, 'PopUp', 'height=100,width=100,top=100,left=100,location=no,resizable=yes,scrollbars=yes');

    // Give the window focus if it's open:
    if ( (popup !== null) && !popup.closed) {
        popup.focus();
        return false; // Prevent the default behavior.
    } else { // Allow the default behavior.
        return true;
    }

} // End of createPopup() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';


    /**
     *
     * Pursue point.
     * Only links with class "popup-link" are targeted
     *
     */
    var links = document.getElementsByClassName('popup-link');

    for (var i = 0, count = links.length; i < count; i++) {

        links[i].addEventListener('click', createPopup, false);

    }


    // Add the click handler to each link:
    //for (var i = 0, count = document.links.length; i < count; i++) {
    //    document.links[i].onclick = createPopup;
    //} // End of for loop.

}; // End of onload function.