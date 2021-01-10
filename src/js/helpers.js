/**
 * Helper file for repetitive functions 
 */

var helpers = {};

helpers.getEl = function( element ) {
    return document.getElementById( element );
}

helpers.createEl = function( element ) {
    return document.createElement( element );
}

export default helpers;
 