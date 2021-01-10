/**
 * Model file for working with data
 */
import data from './data';
import helpers from './helpers';
import view from './view';

/**
 * Main Model Object
 */
let model = {};

/**
 * Initializes the model
 */
model.init = function() {
    data.init();
}

/**
 * renderData - returns the data from the fetch call
 *
 *  @return {Object} data
 */
model.render = function( theData ) {

};

export default model;