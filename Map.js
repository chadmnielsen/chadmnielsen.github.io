define([
    "dojo/_base/declare",
    "esri/map",
    "esri/toolbars/navigation"
], function(declare, Map, Navigation){
    return declare(Map, {
        navigator: null,
        constructor: function(div, options){
            console.log('constructor called');
            this.navigator = new Navigation(this);
        }
    });
});
