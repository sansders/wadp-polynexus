$(document).ready(function() {
	user = sessionStorage.getItem('username');
	perm = sessionStorage.getItem('perm');
	if(user === null){
		window.location = 'adminlogin.html';
	}
	else if(perm == 0){
		window.location = 'main.html';
		alert("Higher permission required!")
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
} 

$(document).ready(function(){
	$("#h1-left").click(function(){
		$("#sidenav").toggle("drop");
	});
});

function listUsernames(){
	/* Creating new li to store data in. 'A' variables will also be created below. */
	var liX = document.createElement('li');
	var bigDiv = document.getElementById('usernames');
	var pX = document.createElement('p');
	
	var userusername = //attempt to extract data from json data file
	var textnode0 = document.createTextNode(userusername);

	pX.appendChild(textnode0);


	liX.appendChild(pX);
	bigDiv.appendChild(liX);

}