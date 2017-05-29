//changes background image
var images = [
	"url(public/images/background2.jpg)",
	"url(public/images/background3.jpg)",
	"url(public/images/background4.jpg)",
	"url(public/images/background5.jpg)"
];

document.getElementById("refresh").addEventListener("click", function(){
	//get body element
	var body = document.getElementById("body");

	//set initial background color before bg image loads
	body.style.backgroundColor = '#333';

	//get length of image array length
	var imagesCount = images.length;

	//generate random number with length as max
	var random = Math.floor(Math.random() * imagesCount);
	
	//set background image, repeat and size
	body.style.backgroundImage  = images[random];
	body.style.backgroundSize = 'cover';
	body.style.backgroundRepeat = 'no-repeat';
});