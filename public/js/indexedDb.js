window.addEventListener("load", function(){
	if(!('indexedDB' in window)){
		console.log("Your browser does not support indexedDB");
		return false;
	}

	var request = indexedDB.open("browser_dashboard", 1);
	request.onsuccess = function(e){
		console.log("Database created");
		//create database handle
		db = e.target.result;
		//load notes using a function
		showNotes();
	};

	request.onerror = function(e){
		console.log("database creation failed");
		console.log(e.target.error.name);
	};

	request.onupgradeneeded = function(e){
		var db = e.target.result;
		if(!db.objectStoreNames.contains('notes')){
			var notesObjectStore = db.createObjectStore('notes', { keyPath: "id", autoIncrement : true });
			//create index for title
			// notesObjectStore.createIndex('title', 'title', {unique:false});
			// var settingsObjectStore = db.createObjectStore('settings', { keyPath: "settingName", autoIncrement: true});
		}
	};
});

function addNotes(){
	var notesTitle = document.getElementById("notes-title");
	var notesBody = document.getElementById("notes-body");
	//create transaction
	var transaction = db.transaction(['notes'], 'readwrite');

	//ask for object store
	var store = transaction.objectStore("notes");

	var date = new Date();
	//define single noptes
	var realNotes = {
		title : notesTitle.value,
		body: notesBody.value,
		date: date.getFullYear() + ":" + date.getMonth() + ":" + date.getDate()
	};

	//perform add
	var request = store.add(realNotes);
	request.onsuccess = function(e){
		console.log("data added");
		notesTitle.value = "";
		notesBody.value = "";
		window.location.reload(true);
	};

	request.onerror = function(e){
		console.log(e.target.error.name);
	};
}

function showNotes(e){
	var notesArray = [];
	var transaction = db.transaction(['notes'], "readonly");
	var store = transaction.objectStore("notes");
	store.openCursor().onsuccess = function(e){
		var cursor = e.target.result;
		if(cursor){
			notesArray.push(cursor.value);
			cursor.continue();
		}
		displayNotes(notesArray);
	};		

}

function displayNotes(data){
	var reverseData = data.reverse();
	var dataLength = reverseData.length;
	var output = "";
	for(let i = 0; i < dataLength; i++){
		output += '<div class="notes-content" onclick="show('+ reverseData[i].id +')">';
		output += '<span>' + reverseData[i].title +  '</span>';
		output += '<span>' + reverseData[i].body +  '</span>';
		output += '</div>';
	}
	document.getElementsByClassName("notes-main")[0].innerHTML = output;
}

