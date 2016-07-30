var xmlhttp= new XMLHttpRequest();
xmlhttp.open("GET", "data/data.json", false);
xmlhttp.send();
var xmlDoc = JSON.parse(xmlhttp.responseText);
$(document).keypress(function(event) {
    if (event.which == 13) {
     login();

   }
});
function login(){
  var input = document.getElementById('usernameinput').value;
  input = input.toLowerCase();
  try{
    //load session storage
    var username = eval("xmlDoc.users['"+input+"'].username");
    var language = eval("xmlDoc.users['"+input+"'].lang");
    var groupchats = eval("xmlDoc.users['"+input+"'].groupchats");
    var privatechats = eval("xmlDoc.users['"+input+"'].privatechats");
	var bloggroup = eval("xmlDoc.users['"+input+"'].bloggroup");
    var theme = eval("xmlDoc.users['"+input+"'].theme");
	var perm = eval("xmlDoc.users['"+input+"'].perm");
    sessionStorage.setItem('username' , username);
    sessionStorage.setItem('language' , language);
    sessionStorage.setItem('userid', input);
    sessionStorage.setItem('groupchats', JSON.stringify(groupchats));
    sessionStorage.setItem('privatechats', JSON.stringify(privatechats));
	sessionStorage.setItem('bloggroup', JSON.stringify(bloggroup));
    sessionStorage.setItem('theme', theme);
	sessionStorage.setItem('perm', perm);
    document.location = "main.html";
  }
  catch(err){
    if(err.name === 'TypeError'){
      alert('Invalid User');
    }
    else{
      alert(err.name);
    }
  }

}
