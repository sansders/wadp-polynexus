var xmlhttp= new XMLHttpRequest();
xmlhttp.open("GET", "data/data.json", false);
xmlhttp.send();
var xmlDoc = JSON.parse(xmlhttp.responseText);

function login(){
  var input = document.getElementById('usernameinput').value;
  input = input.toLowerCase();
  try{
    var username = eval("xmlDoc.users['"+input+"'].username");
    var language = eval("xmlDoc.users['"+input+"'].lang");
    var groupchats = eval("xmlDoc.users['"+input+"'].groupchats");
    var privatechats = eval("xmlDoc.users['"+input+"'].privatechats");
    sessionStorage.setItem('username' , username);
    sessionStorage.setItem('language' , language);
    sessionStorage.setItem('userid', input);
    sessionStorage.setItem('groupchats', groupchats);
    sessionStorage.setItem('privatechats', privatechats);
    document.location = "main.html"
  }
  catch(err){
    if(err.name === 'TypeError'){
      alert('Invalid User');
    }
    else{
      alert('error');
    }
  }

}
