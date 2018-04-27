
let mapit;
var lat = 40.730610;
var lon = -73.935242;
var clat = 0;
var clon = 0;
var zoom = 10;
let PI = 3.14159265359;
let data;
let data1;



function preload () { 
	mapit = loadImage('https://maps.googleapis.com/maps/api/staticmap?center=New York,NY&zoom=10&size=800x600&key=AIzaSyBTJhiYEO42lMYK467izmjc5mriuCekHJw');
	loadJSON("https://falcon.afrikatoday.com/pfny2018.json", gotData);
	loadJSON("https://data.cityofnewyork.us/resource/ahm2-va3h.json", gotData);
}

function setup() {
	createCanvas(800, 600);
	
	//loadJSON("https://falcon.afrikatoday.com/pfny2018.json", gotData);
	
	translate(width/2, height/2);
	imageMode(CENTER);
	image(mapit, 0,0);
	
	lon=radians(lon);
	lat=radians(lat);
	
	var cx = mercX(clon);
	var cy = mercY(clat);
	//mapit = data;
	//for (var i = 0; i < mapit.length; i++);
	console.log("data.falcons: " + data.falcons);
	//console.log("data.length: " + data.length);
	
//	for (var i = 0; i < data.falcons.length; i++) {
//		
//		//var lat = data.falcons[3];
//		//var lon = data.falcons[4];
//		
//		var lat = data.falcons[i].LATITUDE;
//		var lon = data.falcons[i].LONGITUDE;
//		
//		//console.log("lat: " + lat + ", lon: " + lon);
//		
//		//var x = mercX(lon)-cy;
//    	//var y = mercY(lat)-cx;
//		
//		x = map(lon, - 80, -65, 0, width);
//		y = map(lat, 35, 45, 0, height);
//		
//		fill(128,0,128, 200);
//		ellipse(x, y, 1, 1);
//		
//		//console.log("x: " + x + ", y: " + y);
//	}

    
	
	

	
}

function gotData(x) {
	console.log (x);
	data = x;
}

function gotData(y) {
	console.log (y);
	data = y;
}

function mercX(lon){
	
	//var a=(512/PI) * Math.pow(2,zoom);
		var a=(128/PI) * Math.pow(2,zoom);

	var b=lon+PI;
	return a*b;
}

function mercY(lat){
	
	//var a=(512/PI) * Math.pow(2,zoom);
		var a=(128/PI) * Math.pow(2,zoom);

	var b=Math.tan(PI/4 + lat/2);
    var c=PI-Math.log(b);
	return a*c;

}

function drawIt() {
	for (var i = 0; i < data.falcons.length; i++) {
		
		//var lat = data.falcons[3];
		//var lon = data.falcons[4];
		
		var lat = data.falcons[i].LATITUDE;
		var lon = data.falcons[i].LONGITUDE;
		
		//console.log("lat: " + lat + ", lon: " + lon);
		
		//var x = mercX(lon)-cy;
    	//var y = mercY(lat)-cx;
		
		x = map(lon, - 75, -70,0, width);
		y = map(lat, 44, 40,0,height);
		
		fill(128,0,128, 200);
		ellipse(x, y, 1, 1);
		
		//console.log("x: " + x + ", y: " + y);
	}

}


function draw (){
	
	//console.log("draw");
	
//	for (var i = 0; i < data.falcons.length; i++) {
//		
//		//var lat = data.falcons[3];
//		//var lon = data.falcons[4];
//		
//		var lat = data.falcons[i].LATITUDE;
//		var lon = data.falcons[i].LONGITUDE;
//		
//		//console.log("lat: " + lat + ", lon: " + lon);
//		
//		//var x = mercX(lon)-cy;
//    	//var y = mercY(lat)-cx;
//		
//		x = map(lon, - 80, -65, 0, width);
//		y = map(lat, 35, 45, 0, height);
//		
//		fill(128,0,128, 200);
//		ellipse(x, y, 1, 1);
//		
//		//console.log("x: " + x + ", y: " + y);
//	}
	
	drawIt();
	

}




	




// JavaScript Document