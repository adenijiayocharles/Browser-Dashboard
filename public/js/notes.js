document.getElementById("notes").addEventListener("click",function(){
	var notesBg = document.getElementsByClassName("notes-background")[0];
	notesBg.style.display = 'block';
});

document.getElementById("notes-close").addEventListener("click",function(){
	var notesBg = document.getElementsByClassName("notes-background")[0];
	notesBg.style.display = 'none';
});

document.getElementById("new-note").addEventListener("click",function(){
	var notesEditArea = document.getElementsByClassName("notes-edit-area")[0];
	var notesShowArea = document.getElementsByClassName("notes-main")[0];
	notesShowArea.style.display = 'none';
	notesEditArea.style.display = 'block';
});

function show(arg){
	document.getElementsByClassName("edit")[0].style.display = 'none';
	document.getElementsByClassName("notes-main")[0].style.display = 'none';
	document.getElementsByClassName("notes-view")[0].style.display = 'block';
}