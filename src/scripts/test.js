// import "ol/ol.css";
// import Map from "ol/map";
// import View from "ol/view";
// import TileLayer from "ol/layer/tile";
// import XYZ from "ol/source/xyz";
// import sync from "ol-hashed";
// import proj from "ol/proj";
//import Handlebars from "handlebars/runtime";
//import * as $ from 'jquery';


// Retrieve the template data from the HTML (jQuery is used here).
var template = $('#handlebars-demo').html();

//var template = "  <div>My name is {{name}}. I am a {{occupation}}. </div>";

// Compile the template data into a function
var templateScript = Handlebars.compile(template);

var context = { "name" : "Ritesh Kumar", "occupation" : "developer" };

// html = 'My name is Ritesh Kumar. I am a developer.'
var html = templateScript(context);

// Insert the HTML code into the page
//console.log(html);
$(document.body).append(html);

// TODO: add a "minimize map button on map after going full screen"


