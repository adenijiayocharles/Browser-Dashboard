document.getElementById("notes").addEventListener("click",function(){
	var notesBg = document.getElementsByClassName("notes-background")[0];
	notesBg.style.display = 'block';
});

document.getElementById("notes-close").addEventListener("click",function(){
	var notesBg = document.getElementsByClassName("notes-background")[0];
	notesBg.style.display = 'none';
});