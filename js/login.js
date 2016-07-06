var xmlhttp= new XMLHttpRequest();
xmlhttp.open("GET", "data/data.json", false);
xmlhttp.send();
var xmlDoc = JSON.parse(xmlhttp.responseText);

function login(){
  var input = document.getElementById('usernameinput').value;
  var y = eval("xmlDoc.users['"+input+"'].username");
  sessionStorage.setItem('username' , y);
  window.location = "main.html"
}
