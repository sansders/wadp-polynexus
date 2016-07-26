

$(document).ready(function() {
	user = sessionStorage.getItem('username');
	perm = sessionStorage.getItem('perm');
	if(user === null || perm == 0){
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
