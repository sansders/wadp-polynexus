function changeTheTheme(n){
  if(n === 'mono'){
    //monochrome theme
    var sheet = document.createElement('style');
    sheet.innerHTML ="button {background-color:rgba(180,180,180,1);} button:hover{background-color: rgba(180,180,180,0.7);} h1 {background-color:rgba(180,180,180,0.7)}body {background-image: url(img/3mono.jpg);} .intro h2{color:rgba(255,255,255,1);} .intro p{color:rgba(255,255,255,1)}";
    document.body.appendChild(sheet);
    console.log("Theme changed to mono");
  }
  else if(n === 'pink'){
    var sheet = document.createElement('style');
    sheet.innerHTML = "button {background-color:rgba(255,105,180,1);} button:hover{background-color: rgba(255,150,180,0.4);} h1 {background-color: rgba(255,255,255,0.7); color:black;} body {background-image: url(img/3pink.jpg);} .intro h2{color:rgba(0,0,0,0.8);} .intro p{color:rgba(0,0,0,0.8)}";
    if(document.body != null){ document.body.appendChild(element); }
    document.body.appendChild(sheet);
    console.log("Theme changed to pink");
  }
  else if(n === 'classic'){
    var sheet = document.createElement('style');
    sheet.innerHTML = "button{background-color: rgba(0, 76, 159, 0.7);} button:hover{background-color: rgba(0, 76, 159, 0.4);} h1 {background-color: rgba(0, 76, 159, 0.7);} body {background-image: url(img/3classic.jpg);} .intro h2{color:rgba(255,255,255,1);} .intro p{color:rgba(255,255,255,1)}";
    document.body.appendChild(sheet);
    console.log("Theme changed to classic");
  }
  else {
    console.log("Invalid theme, ignore if not running on ghpages/host")
  }

}
