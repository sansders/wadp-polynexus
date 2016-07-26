

$(document).ready(function() {
	user = sessionStorage.getItem('username');
	if(user === null){
		window.location = 'adminlogin.html';
	}
});

function logout(){
  window.location.replace('adminlogin.html');
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('language');
  sessionStorage.removeItem('userid');
  sessionStorage.removeItem('theme');
} 

$(document).ready(function(){
	$("#h1-left").click(function(){
		$("#sidenav").toggle("drop");
	});
});
