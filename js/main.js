$(document).ready(function(){
  $(function() {
    $("#tabs").tabs();
  });
  $(function() {
    $("#setting").tabs();
  });
});

function changeUsername(){
  //will contain two parts.
  //first part: change the html to display username
  var username = document.getElementById('usernamefield').value;
  document.getElementById('userid').innerHTML=username;
  //do second part later
}
