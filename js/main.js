var user;
var xmlDoc;
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
    var xmlhttp= new XMLHttpRequest();
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
  document.getElementById('displaycurrentid').innerHTML="Current Username: "+useru;
  //do second part later
  //store in json

}
