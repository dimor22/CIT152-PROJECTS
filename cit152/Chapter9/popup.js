/**
 * Created by davidlopez on 2/13/15.
 */

function createPopup() {

    'use script';
    var popup = window.open('popupB.html', 'PopUp',
        'height=100, width=100,left=100,location=no,resizable=yes,scrollbars=yes');

    if ((popup !== null) && !popup.closed) {
        popup.focus();
        return false;
    }
}

window.onload = function() {
    document.getElementById('link').onclick = createPopup;
}