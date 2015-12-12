define([
    "dojo/_base/declare",
    "esri/map"
], function(declare, Map){
    return declare(Map, {
        constructor: function(div, options){
            console.log('constructor called');
        }
    });
});
