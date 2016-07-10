var user;
var xmlDoc;
var xmlhttp= new XMLHttpRequest();
$(document).ready(function(){
  user = sessionStorage.getItem('username');
  document.getElementById('userid').innerHTML=user;
  document.getElementById('displaycurrentid').innerHTML="Current Username: "+user;
  if(user == null){
    window.location = 'index.html';
  }
  else{
    $(function() {
      $("#tabs").tabs();
    });
    $(function() {
      $("#setting").tabs();
    });
    $(function() {
      $("#events").tabs();
    });
    setLanguage();

    xmlhttp.open("GET", "data/data.json", false);
    xmlhttp.send();
    xmlDoc = JSON.parse(xmlhttp.responseText);
  }

});

function changeUsername(){
  //will contain two parts.
  //first part: change the html to display username
  user = document.getElementById('usernamefield').value;
  document.getElementById('userid').innerHTML=user;
  document.getElementById('displaycurrentid').innerHTML="Current Username: "+user;
  //do second part later
  //store in json
  var input = sessionStorage.getItem('userid');
  xmlDoc.users[input].username = user;

}

function logout(){
  window.location.replace('index.html');
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('language');
  sessionStorage.removeItem('userid');
  sessionStorage.removeItem('groupchats');
  sessionStorage.removeItem('privatechats');
}
