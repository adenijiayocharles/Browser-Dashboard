(function(){
	setInterval(function(){
		var hourDiv = document.getElementById("hour");
		var minutesDiv = document.getElementById("minutes");
		var secondsDiv = document.getElementById("seconds");


		var date = new Date();
		var hour = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();

		//update div with corresponding times
		hourDiv.innerHTML = "<h3>" + hour + "<h3>";
		minutesDiv.innerHTML = "<h3>" + minutes + "<h3>";
		secondsDiv.innerHTML = "<h3>" + seconds + "<h3>";
	}, 1000);
})();