define([
    "dojo/_base/declare",
    "esri/map",
    "esri/toolbars/navigation"
], function(declare, Map, Navigation){
    return declare(Map, {
        navigator: null,
        constructor: function(div, options){
            console.log('constructor called');
            console.dir(this);
            var that = this;
            this.navigator = new Navigation(that);
        }
    });
});
