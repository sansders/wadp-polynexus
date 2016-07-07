var xmlhttp= new XMLHttpRequest();
xmlhttp.open("GET", "data/data.json", false);
xmlhttp.send();
var xmlDoc = JSON.parse(xmlhttp.responseText);

function login(){
  var input = document.getElementById('usernameinput').value;
  input = input.toLowerCase();
  try{
    var username = eval("xmlDoc.users['"+input+"'].username");
    var language = eval("xmlDoc.users['"+input+"'].lang")
    sessionStorage.setItem('username' , username);
    sessionStorage.setItem('language' , language);
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
