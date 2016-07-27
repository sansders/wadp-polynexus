function changeBackground(){
  var images = [1,2,3,4];
  var currentImg= images[Math.floor(Math.random()*images.length)];
  var string = "url('indeximg/"+currentImg+".jpg')";
  $('.signup').css('background-image', string);
}

$(document).ready(function(){
  changeBackground();
  setInterval(changeBackground, 50000);
});

/* Testing */
var password = false;
function signUp(){
	var username = document.getElementById("username").value;
	if (username != null && username != ""){
		if (password == true){
			var pass = document.getElementById("password").value;
			sessionStorage.setItem("password", pass);
			sessionStorage.setItem("username", username);
		}
		else {
			alert("Invalid password");
		}
	}
	else {
		alert("Invalid username");
	}
}

function passwordCheck(){
	setInterval(function(){
		var pass = document.getElementById("password").value;
		var pass1 = document.getElementById("passwordcom").value;
		var span = document.getElementById("match");
		if (pass.length > 3){
			if (pass == pass1 && pass != null && pass != ""){
				span.innerHTML = "Password match!";
				span.style.color = "green";
				password = true;
			}
			else {
				span.innerHTML = "Password does not match!";
				span.style.color = "red";
				password = false;
			}	
		}
		else {
			span.innerHTML = "Password does not meet the required length!";
			span.style.color = "red";
			password = false;
		}
	}, 250);
}