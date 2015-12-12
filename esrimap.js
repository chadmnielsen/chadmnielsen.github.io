var map;

require(["./Map.js", "esri/toolbars/navigation", "dojo/domReady!"], function(Map, Navigation) {
  map = new Map("map", {
    basemap: "topo",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
    center: [-122.45, 37.75], // longitude, latitude
    zoom: 13
  });
  console.dir(map);
  console.log(map.navigator.isFirstExtent());
  console.log(Navigation.PAN);
  console.log(Navigation.ZOOM_IN);
  console.log(Navigation.ZOOM_OUT);
  
  var nav = new Navigation(map);
  nav.activate(Navigation.PAN);
  //map.navigator.activate(Navigation.ZOOM_IN);
});
