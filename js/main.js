var user;
$(document).ready(function(){
  $(function() {
    $("#tabs").tabs();
  });
  $(function() {
    $("#setting").tabs();
  });
  $(function() {
    $("#events").tabs();
  });
  user = sessionStorage.getItem('username');
  document.getElementById('userid').innerHTML=user;
  document.getElementById('displaycurrentid').innerHTML="Current Username: "+user;
});

function changeUsername(){
  //will contain two parts.
  //first part: change the html to display username
  user = document.getElementById('usernamefield').value;
  document.getElementById('userid').innerHTML=user;
  document.getElementById('displaycurrentid').innerHTML="Current Username: "+useru;
  //do second part later
}
