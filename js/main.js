var user = '111111a';
var xmlDoc;
var xmlhttp= new XMLHttpRequest();
$(document).ready(function(){
  user = sessionStorage.getItem('username');
  //document.getElementById('userid').innerHTML=user;
  //document.getElementById('displaycurrentid').innerHTML="Current Username: "+user;
  if(user === null){
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
    var theme = sessionStorage.getItem('theme');
    var language = sessionStorage.getItem('language');
    changetheme(theme);
    setLanguage(language);

    //xmlhttp.open("GET", "data/data.json", false);
    //xmlhttp.send();
    //xmlDoc = JSON.parse(xmlhttp.responseText);
	
	events1();
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
  sessionStorage.removeItem('theme');
}

function changetheme(n){
  if(n === 'mono'){
    //monochrome theme
    var sheet = document.createElement('style');
    sheet.innerHTML = ".navbarlist li:hover {background-color: #ebebeb;} h1{  background-color: white; color: black; border-bottom:2px solid #dcdcdc;} .navbarlist li a{color: black} button:hover{background-color:#dcdcdc} .currentchatlist{ border:solid 1px #dcdcdc;} .currentchatlist li{ border: solid 1px #dcdcdc;} .addchat:hover{ background-color:  #dcdcdc;} .chatinputbox input[type='text']{border: solid 1px #dcdcdc; } .chatoutput{ border 1px solid dcdcdc;}";
    document.body.appendChild(sheet);
	sessionStorage.setItem("theme","mono");
  }
  else if(n === 'pink'){
    var sheet = document.createElement('style');
    sheet.innerHTML = ".navbarlist li:hover {background-color: rgb(219,112,147);} h1{  background-color: rgb(255,182,193); color: white; border-bottom: none;} .navbarlist li a{color: white} button:hover{background-color:rgb(199,21,133)} .currentchatlist{ border:solid 1px rgb(255,192,203);} .currentchatlist li{ border: solid 1px  	rgb(255,192,203);} .addchat:hover{ background-color: rgb(255,192,203)} .chatinputbox input[type='text']{border: solid 1px rgb(255,192,203); } .chatoutput{ border 1px solid rgb(255,192,203);} button:hover{background-color: rgb(255,192,203);} ";
    document.body.appendChild(sheet);
	sessionStorage.setItem("theme","pink");
  }
  else if(n === 'classic'){
    var sheet = document.createElement('style');
    sheet.innerHTML = ".navbarlist li:hover {background-color: rgba(0, 76, 159, 0.7);} h1{  background-color: rgba(0, 76, 159, 0.7); color: white; border-bottom: none;} .navbarlist li a{color: white} button:hover{background-color:#dcdcdc} .currentchatlist{ border:solid 1px #dcdcdc;} .currentchatlist li{ border: solid 1px #dcdcdc;} .addchat:hover{ background-color:  rgba(0, 76, 159, 0.7);} .chatinputbox input[type='text']{border: solid 1px #dcdcdc; } .chatoutput{ border 1px solid dcdcdc;} button:hover{background-color: rgba(30, 172, 253, 1);}" ;
    document.body.appendChild(sheet);
	sessionStorage.setItem("theme","pink");
  }

}

function generateChatlist(){
  var groupchats = sessionStorage.getItem('groupchats');
}

function goBlog(){
  window.location ="blog.html";
}

function goFaq(){
  window.location="faq.html";
}

function goRule(){
  window.location="rules.html";
}

 function events1(){
	$('#events-2').hide();
	$('#events-1').show();
}	

 function events2(){
	$('#events-1').hide();
	$('#events-2').show();
}	