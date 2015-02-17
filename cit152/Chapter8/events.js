/**
 *	Chapter 8 epoch.js
 *	Author: David Lopez
 */


function reportEvent(e) {
    'use strict';
    if (typeof e == 'undefined')  e = window.event;
    var target = e.target || e.srcElement;
    var msg = target.nodeName + ': ' + e.type + '\n';
    U.$('output').value += msg;
}

function setHandlers(e) {
    'use strict';


    /**
     *
     * Pursue point 4.
     * Notifies when the form has been submitted
     *
     */

    // 1. Clears output when form is submitted
    U.$('output').value = '';

    var events = ['mouseover', 'mouseout', 'click', 'keypress', 'blur'];

    // 2. Starts the message
    var msg = 'Form submitted!' + '\n';
    for (var i = 0, count = events.length; i < count; i++) {
        var checkbox = U.$(events[i]);
        if (checkbox.checked) {
            U.addEvent(document, events[i], reportEvent);

            // 3. Adds the events registered to the message
            msg += events[i] + ' event registered' + '\n';
        } else {
            U.removeEvent(document, events[i], reportEvent);
        }
    }

    // 4. Displays the message
    U.$('output').value = msg;
    return false;

}

window.onload = function() {
    'use strict';
    U.$('eventsForm').onsubmit = setHandlers;

};