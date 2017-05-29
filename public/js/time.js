function addLeadingZeros(i){
	if(i < 10){
		i = "0"+ i;
	}
	return i;
}

function getMonthName(month){
	var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return monthName[month];
}

function formatDay(day){
	if(day == 1){
		day = day +"st";
	}else if(day == 2){
		day = day +"nd";
	}else if(day == 3){
		day = day +"rd";
	}else if(day == 21){
		day = day +"st";
	}else if(day == 22){
		day = day +"nd";
	}else if(day == 23){
		day = day +"rd";
	}else if(day == 31){
		day = day +"st";
	}else{
		day = day +"th";
	}
	return day;
}

(function(){
	var dateClass = new Date();
	var year = dateClass.getFullYear();
	var month = getMonthName(dateClass.getMonth());
	var day = formatDay(dateClass.getDate());
	var dateDiv = document.getElementById("date");
	dateDiv.innerHTML = "<h3>" + day + " of " + month + ", " + year + "<h3>";


	setInterval(function(){
		var dateClass = new Date();
		var timeDiv = document.getElementById("time");
		var hour = addLeadingZeros(dateClass.getHours());
		var minutes = addLeadingZeros(dateClass.getMinutes());
		var seconds = addLeadingZeros(dateClass.getSeconds());
		//update div with corresponding times
		timeDiv.innerHTML = "<h3>" + hour + " : " + minutes + " : " + seconds + "<h3>";
	}, 1000);
})();