var xmlhttp= new XMLHttpRequest();
xmlhttp.open("GET", "data/data.json", false);
xmlhttp.send();
var xmlDoc = JSON.parse(xmlhttp.responseText)
function login(){
  var input = document.getElementById('usernameinput').value;
  input = input.toLowerCase();
  var passinput = document.getElementById('passwordinput').value;
  try{
    //load session storage
    var username = eval("xmlDoc.users['"+input+"'].username");
    var language = eval("xmlDoc.users['"+input+"'].lang");
    var groupchats = eval("xmlDoc.users['"+input+"'].groupchats");
    var privatechats = eval("xmlDoc.users['"+input+"'].privatechats");
    var theme = eval("xmlDoc.users['"+input+"'].theme");
	var perm = eval("xmlDoc.users['"+input+"'].perm");
    sessionStorage.setItem('username' , username);
    sessionStorage.setItem('language' , language);
    sessionStorage.setItem('userid', input);
    sessionStorage.setItem('groupchats', JSON.stringify(groupchats));
    sessionStorage.setItem('privatechats', JSON.stringify(privatechats));
    sessionStorage.setItem('theme', theme);
	sessionStorage.setItem('perm', perm);
    document.location = "main.html"
  }
  catch(err){
    if(err.name === 'TypeError'){
		var user = sessionStorage.getItem("username");
		var pass = sessionStorage.getItem("password");
		if(user != null && user != ""){
			if(input == user && passinput == pass){
				sessionStorage.setItem('language' , "en");
				sessionStorage.setItem('groupchats', "");
				sessionStorage.setItem('privatechats', "");
				sessionStorage.setItem('theme', theme);
				sessionStorage.setItem('perm', 0);
				document.location = "main.html"
			}
			else{
				alert("Wrong username or password");
			}
		} 
		else{
			alert('Invalid User');
		}
    }
    else{
      alert(err.name);
    }
  }

}
