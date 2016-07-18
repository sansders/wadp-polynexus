var xmlhttp= new XMLHttpRequest();
xmlhttp.open("GET", "data/data.json", false);
xmlhttp.send();
var xmlDoc = JSON.parse(xmlhttp.responseText)
function login(){
  var input = document.getElementById('usernameinput').value;
  input = input.toLowerCase();
  try{
    //load session storage
    var username = eval("xmlDoc.users['"+input+"'].username");
    var language = eval("xmlDoc.users['"+input+"'].lang");
    var groupchats = eval("xmlDoc.users['"+input+"'].groupchats");
    var privatechats = eval("xmlDoc.users['"+input+"'].privatechats");
    var theme = eval("xmlDoc.users['"+input+"'].theme");
    sessionStorage.setItem('username' , username);
    sessionStorage.setItem('language' , language);
    sessionStorage.setItem('userid', input);
    sessionStorage.setItem('groupchats', JSON.stringify(groupchats));
    sessionStorage.setItem('privatechats', JSON.stringify(privatechats));
    sessionStorage.setItem('theme', theme);
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
