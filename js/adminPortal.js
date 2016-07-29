$(document).ready(function() {
	user = sessionStorage.getItem('username');
	perm = sessionStorage.getItem('perm');
	if(user === null){
		window.location = 'adminlogin.html';
	}
	else if(perm === 0){
		alert("Higher permission required!");
		window.location = 'main.html';
	}
});

function logout(){
  window.location.replace('adminlogin.html');
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('language');
  sessionStorage.removeItem('userid');
  sessionStorage.removeItem('theme');
  sessionStorage.removeItem('groupchats');
  sessionStorage.removeItem('privatechats');
  sessionStorage.removeItem('perm');
};
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

function readTextFile(file)
{
	var rawFile = new XMLHttpRequest();
    rawFile.open("GET","../data/data.json", false);
	console.log('running1');
	alert(allText);
	console.log('running2');
    rawFile.send(null);

}


$(document).ready(function listUsernames(){

	console.log('running');

	var ulX = document.getElementById('usernames');
	var liX0 = document.createElement('li');
	var liX1 = document.createElement('li');
	var liX2 = document.createElement('li');
	var liX3 = document.createElement('li');
	var liX4 = document.createElement('li');
	var liX5 = document.createElement('li');


	console.log('running2');

	var userusername0 = "161714f";
	var userusername1 = "123456a";
	var userusername2 = "111111a";
	var userusername3 = "160280x";
	var userusername4 = "160364n";
	var userusername5 = "bbbelson";



	//attempt to extract data from json data file soon!!!



	var textnode0 = document.createTextNode(userusername0);
	var textnode1 = document.createTextNode(userusername1);
	var textnode2 = document.createTextNode(userusername2);
	var textnode3 = document.createTextNode(userusername3);
	var textnode4 = document.createTextNode(userusername4);
	var textnode5 = document.createTextNode(userusername5);

	console.log('running3');

	liX0.appendChild(textnode0);
	liX1.appendChild(textnode1);
	liX2.appendChild(textnode2);
	liX3.appendChild(textnode3);
	liX4.appendChild(textnode4);
	liX5.appendChild(textnode5);



	console.log('running4');

	ulX.appendChild(liX0);
	ulX.appendChild(liX1);
	ulX.appendChild(liX2);
	ulX.appendChild(liX3);
	ulX.appendChild(liX4);
	ulX.appendChild(liX5);

});
