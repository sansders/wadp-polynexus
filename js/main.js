var user;
var xmlDoc;
var xmlhttp= new XMLHttpRequest();
$(document).ready(function(){
  user = sessionStorage.getItem('username');
  document.getElementById('userid').innerHTML=user;
  document.getElementById('displaycurrentid').innerHTML="Current Username: "+user;
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

    xmlhttp.open("GET", "data/data.json", false);
    xmlhttp.send();
    xmlDoc = JSON.parse(xmlhttp.responseText);
    loadChats();
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
  sessionStorage.removeItem('perm');
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
	sessionStorage.setItem("theme","classic");
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
	$('#events-3').hide();
	$('#events-999').hide();
}

 function events2(){
	$('#events-1').hide();
	$('#events-2').show();
	$('#events-3').hide();
	$('#events-999').hide();
}

 function events3(){
	$('#events-1').hide();
	$('#events-2').hide();
	$('#events-3').show();
	$('#events-999').hide();
}

function loadChats(){
  //function will load chats from json file.
  var grpchat = JSON.parse(sessionStorage.getItem('groupchats'));
  var privchat = JSON.parse(sessionStorage.getItem('privatechats'));

  for(var i=0; i<grpchat.length; i++){
      var li = document.createElement('LI');
      var h3 = document.createElement('H3');
      var p = document.createElement('P');
      var time = document.createElement('P');
      p.className = "textchat";
      time.className = "timestamp";
      p.innerHTML = "placeholder: i am a placeholder";
      time.innerHTML = "13:13";

      h3.innerHTML = grpchat[i];
      li.appendChild(h3);
      li.appendChild(p);
      li.appendChild(time);
      document.getElementById('chatul').insertBefore(li, addchat);
  }
  for(var x=0; x<privchat.length; x++){
    var li1 = document.createElement('LI');
    var h31 = document.createElement('H3');
    var p1 = document.createElement('P');
    var time1 = document.createElement('P');
    p1.className = "textchat";
    time1.className = "timestamp";
    p1.innerHTML = "placeholder: i am a placeholder";
    time1.innerHTML = "13:13";

    h31.innerHTML = privchat[i];
    li1.appendChild(h31);
    li1.appendChild(p1);
    li1.appendChild(time1);
    document.getElementById('chatul').insertBefore(li1, addchat);
  }
}

function addEvent(){
	/* Creating new li to store data in. 'A' variables will also be created below. */
	var liA = document.createElement('li');
	var aA = document.createElement('a');
	aA.setAttribute('href', '#events-3');
	
	/* Creating element types to store data in */
	var h3A = document.createElement('h3');
	var eventnameA = document.getElementById('inputeventname').value; 
	
	var h4A = document.createElement('h4');
	var eventtypeA = document.getElementById('inputeventtype').value; 
	
	var pA = document.createElement('p')
	var timeAndVenueA = document.getElementById('inputeventtime').value;
	var timeAndVenueB = document.getElementById('inputeventvenue').value;
	/* End of creating element types */
	
	/* Creating textnodes to store the element types stored in the variables */
	var textnode0 = document.createTextNode(eventnameA);
	var textnode1 = document.createTextNode(eventtypeA);
	var textnode2 = document.createTextNode(timeAndVenueA + " at " + timeAndVenueB);
	
	/* Appending textnodes to 'A' variables to allow the element types to show */
	h3A.appendChild(textnode0);
	h4A.appendChild(textnode1);
	pA.appendChild(textnode2);
	
	/* Appending 'A' variables into liA so it'll appear in #events */
	liA.appendChild(h3A);
	liA.appendChild(h4A);
	liA.appendChild(pA);
	liA.setAttribute('onclick','events3()');
	
	aA.appendChild(liA);
	
	/* Putting #events above the 'Create an event' li, inside #eventsul */
	var list= document.getElementById('eventsul');
	list.insertBefore(aA, document.getElementById('addevent'));
	
	// End of putting event details to side bar. //
	
	
	
	// Start of putting event details into the page //
	// Still not working though //
	
	var divB = document.createElement('div');
	divB.id= 'divisionB';
	
	var h2B = document.createElement('h2');
	var eventNameB = document.getElementById('inputeventname').value;
	h2B.id = "eventtitle";
	
	var h4B = document.createElement('h4');
	var eventDateB = document.getElementById('inputeventdate').value;
	var eventTimeB = document.getElementById('inputeventtime').value;
	var eventVenueB = document.getElementById('inputeventvenue').value;
	h4B.className = "eventdetails";
	
	
	var pB = document.createElement('p');
	var pB1 = document.createElement('p');
	var eventDescriptionB = document.getElementById('inputeventdescription').value;
	
	eventDescriptionB.className = "eventdescription"; 
	
	var textnode0 = document.createTextNode(eventNameB);
	var textnode1 = document.createTextNode("Date: "+eventDateB); 
	var textnode2 = document.createTextNode("Time: "+eventTimeB);
	var textnode3 = document.createTextNode("Venue: "+eventVenueB);
	var textnode9 = document.createTextNode("Event description: ");
	var textnode91 = document.createTextNode(eventDescriptionB);
	
	h2B.appendChild(textnode0);
	
	h4B.appendChild(textnode1);
	h4B.appendChild(document.createElement("br"));
	h4B.appendChild(textnode2);
	h4B.appendChild(document.createElement("br"));
	h4B.appendChild(textnode3);
	h4B.classname = "eventdetails";

	pB.appendChild(textnode9);
	pB.style.fontWeight = "bold";
	pB.appendChild(document.createElement("br"));
	pB.appendChild(document.createElement("br"));
	
	pB1.appendChild(textnode91);
	

	// It all comes together *evil laughter* //
	divB.appendChild(h2B);
	divB.appendChild(h4B);
	divB.appendChild(pB);
	divB.appendChild(pB1);
	divB.id = 'events-3';
	divB.className = 'activetab';
	
	var list1 = document.getElementById('primaryEventsPlace');
	list1.className = "activetab";
	list1.insertBefore(divB, document.getElementById('events-999'));
	
}