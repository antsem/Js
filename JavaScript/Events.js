/**
 * Events
 */

/**
 * Add event
 */

element.addEventListener(event, handler);

/**
 * Remove event
 */

element.removeEventListener(event, handler);

/**
 * Событие загрузки документа
 */

document.addEventListener("DOMContentLoaded", function() {
    // code...
});

/**
 * IE8- add event
 */

element.attachEvent("on" + event, handler);

/**
 * IE8- remove event
 */

element.detachEvent("on" + event, handler);