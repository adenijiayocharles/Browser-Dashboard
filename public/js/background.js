//changes background image
var images = [
	"url(public/images/background2.jpg)",
	"url(public/images/background3.jpg)",
	"url(public/images/background4.jpg)",
	"url(public/images/background5.jpg)"
];

document.getElementById("refresh").addEventListener("click", function(){
	var imagesCount = images.length;
	var random = Math.floor(Math.random() * imagesCount);
	var body = document.getElementById("body");
	body.style.backgroundImage  = images[random];
	body.style.backgroundSize = 'cover';
	body.style.backgroundRepeat = 'no-repeat';
	//console.log(images[random]);
});