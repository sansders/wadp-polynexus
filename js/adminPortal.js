$(document).ready(function() {/*
	user = sessionStorage.getItem('username');
	perm = sessionStorage.getItem('perm');
	if(user === null){
		window.location = 'adminlogin.html';
	}
	else if(perm == 0){
		window.location = 'main.html';
		alert("Higher permission required!")
	}
});*/

function logout(){
  window.location.replace('adminlogin.html');
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('language');
  sessionStorage.removeItem('userid');
  sessionStorage.removeItem('theme');
  sessionStorage.removeItem('groupchats');
  sessionStorage.removeItem('privatechats');
  sessionStorage.removeItem('perm');
}
});
$(document).ready(function(){
	$("#h1-left").click(function(){
		$("#sidenav").toggle("drop");
	});
});

function addToList(wordToAdd){
	var newWord = document.createElement('LI');
  var theNewWord = document.createTextNode(wordToAdd);
  newWord.appendChild(theNewWord);
	document.getElementById('wordList').appendChild(newWord);
}
