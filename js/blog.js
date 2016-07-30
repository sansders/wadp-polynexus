$(document).ready(function() {
	user = sessionStorage.getItem('username');
	if(user === null){
		window.location = 'index.html';
	}
});

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

$(document).ready(function() {
	var theme = sessionStorage.getItem("theme");
	switch(theme){
		case "mono":
					var sheet = document.createElement('style');
					sheet.innerHTML = ".navbarlist li:hover {background-color: #ebebeb;} .navbar-container h1{background-color: white; color: black; border-bottom:2px solid #dcdcdc;} .navbarlist li a{color: black} .navbarlist li a:hover{color: black} .footerlist li:hover {background-color: #ebebeb;} footer{background-color: white; color: black; border-bottom:2px solid #dcdcdc;} .footerlist li a{color: black} .footerlist li a:hover{color: black}";
					document.body.appendChild(sheet);
					break;
		case "pink":
					var sheet = document.createElement('style');
					sheet.innerHTML = ".navbarlist li:hover {background-color: rgb(219,112,147);} .navbar-container h1{  background-color: rgb(255,182,193); color: white; border-bottom: none;} .navbarlist li a{color: white} .footerlist li:hover {background-color: rgb(219,112,147);} footer{  background-color: rgb(255,182,193); color: white; border-bottom: none;} .footerlist li a{color: white}";
					document.body.appendChild(sheet);
					break;
		case "classic":
					var sheet = document.createElement('style');
					sheet.innerHTML = ".navbarlist li:hover {background-color: rgba(0, 76, 159, 0.7);} .navbar-container h1{  background-color: rgba(0, 76, 159, 0.7); color: white; border-bottom: none;} .navbarlist li a{color: white} .footerlist li:hover {background-color: rgba(0, 76, 159, 0.7);} footer{background-color: rgba(0, 76, 159, 0.7); color: white; border-bottom: none;} .footerlist li a{color: white}" ;
					document.body.appendChild(sheet);
					break;

	}
});

$(document).ready(function() {
	$(".article-content").hide();
	$(".article-preview").click(function(){
		$(this).next(".article-content").slideToggle("slow");
	});
});

function divToggle() {
	$(".posted-article-content").hide();
	$(".posted-article-preview").click(function(){
		$(this).next(".posted-article-content").slideToggle("slow");
	});
}

var medium = 0;
$(window).scroll(function () {
	var lenghtFromTop = $(window).scrollTop();
	if (lenghtFromTop > medium){
		$(".navbar-container").hide("swing");
	}
	else {
		$(".navbar-container").show("swing");
	}
	medium = lenghtFromTop;
});

$(document).ready(function(){
	$("#createblog").hide();
	$("#newblog").click(function(){
		$("#createblog").show("fold");
	});
	$("#close").click(function(){
		$("#createblog").hide("fold");
	});
	$("#close2").click(function(){
		$("#adjust-image").hide("scale");
	});
});

var width1;
var height1;
function overlay(){
	$("#adjust-image").show("scale");
	var preview = document.getElementById("Image").value;
	document.getElementById("previewImg").src = preview;
	width1 = document.getElementById("range").value;
	height1 = document.getElementById("vertical-range").value;
	document.getElementById("previewImg").style.width = width1 + "%";
	document.getElementById("previewImg").style.height = height1 + "px";
}

function checkSlider(){
	setInterval(function(){
		width1 = document.getElementById("range").value;
		height1 = document.getElementById("vertical-range").value;
		document.getElementById("previewImg").style.width = width1 + "%";
		document.getElementById("previewImg").style.height = height1 + "px";
	}, 50);
}

var title, article, subtitle;
function wordcheck(clicked_id){
	var word = document.getElementById(clicked_id).value;
	switch(clicked_id){
		case "Title":
			if (word != "") {
				title = 1;
			}
			else {
				title = 0;
			}
			break;

		case "Subtitle":
			if (word != "") {
				subtitle = 1;
			}
			else {
				subtitle = 0;
			}
			break;

		case "Article":
			if (word != "") {
				article = 1;
			}
			else {
				article = 0;
			}
			break;
	}
}

var confirmation;
function verify() {
	if (title == 1 && article == 1 && subtitle == 1) {
		confirmation = confirm("Are you sure you want to continue?");
		if (confirmation == true) {
			document.getElementById("createblog").style.display='none';
		}
		else {
			return false;
		}
	}
	else if (title != 1 || subtitle != 1 || article != 1) {
		if (title != 1 && subtitle != 1 && article != 1) {
				alert("WRITE SOMETHING!");
		}
		else if (title != 1 && subtitle != 1) {
			confirmation = confirm("There is no title and subtitle. Are you sure you want to continue?");
			if (confirmation == true) {
				document.getElementById("createblog").style.display='none';
			}
		}
		else if (title != 1 && article != 1) {
			confirmation = confirm("There is no title and article. Are you sure you want to continue?");
			if (confirmation == true) {
				document.getElementById("createblog").style.display='none';
			}
		}
		else if (subtitle != 1 && article != 1) {
			confirmation = confirm("There is no subtitle and article. Are you sure you want to continue?");
			if (confirmation == true) {
				document.getElementById("createblog").style.display='none';
			}
		}
		else if (title != 1){
			confirmation = confirm("There is no title. Are you sure you want to continue?");
			if (confirmation == true) {
				document.getElementById("createblog").style.display='none';
			}
		}
		else if (subtitle != 1 ) {
			confirmation = confirm("There is no subtitle. Are you sure you want to continue?");
			if (confirmation == true) {
				document.getElementById("createblog").style.display='none';
			}
		}
		else {
			confirmation = confirm("There is no article. Are you sure you want to continue?");
			if (confirmation == true) {
				document.getElementById("createblog").style.display='none';
			}
		}
	}
}

var numOfArticle = 3;
var i = 3;
var x;
var counter = "";
function creatingDiv() {
	if (confirmation == true) {
		var Li1 = document.createElement("li");
		var Div1 = document.createElement("div"); //class="article-container" 	id="posted-article-container"
		var Div2 = document.createElement("div"); //class="article-preview" 	id="posted-article-preview"
		var Div3 = document.createElement("div"); //class="article-header"
		var Div4 = document.createElement("div"); //class="article-subheader"
		var Div5 = document.createElement("div"); //class="article" 			id="posted-article"
		var Div6 = document.createElement("div"); //class="written-article"
		var Div7 = document.createElement("div"); //class="article-image"
		var Div8 = document.createElement("div"); //class="article-content"
		var Div9 = document.createElement("div"); //class="show-time"
		var Div10 = document.createElement("div"); //class="info"
		var Div11 = document.createElement("div"); //class="written"
		var H3 = document.createElement("H3"); //class="article-title"			id="posted-article-title"
		var H4 = document.createElement("H4"); //class="article-subtitle"		id="posted-article-subtitle"
		var P1 = document.createElement("p"); //								id="posted-written-article"
		var P2 = document.createElement("p"); //								id="posttime"
		var P3 = document.createElement("p");
		var P3Text = document.createTextNode("Posted By: " + user);
		var SPAN1 = document.createElement("span");
		var IMG1 = document.createElement("img"); //							id="posted-image"
		var IMG2 = document.createElement("img");
		var Ul1 = document.getElementById("ullist");

		Div1.className = "article-container";
		Div2.className = "article-preview";
		Div3.className = "article-header";
		Div4.className = "article-subheader";
		Div5.className = "article";
		Div6.className = "written-article";
		Div7.className = "article-image";
		Div8.className = "article-content";
		Div9.className = "show-time";
		Div10.className = "info";
		Div11.className = "written";
		H3.className = "article-title";
		H4.className = "article-subtitle";
		IMG2.className = "blackLike";

		Div1.setAttribute("id", (i + 1));
		Div2.setAttribute("id", "posted-article-preview"  + counter);
		Div5.setAttribute("id", "posted-article"  + counter);
		H3.setAttribute("id", "posted-article-title"  + counter);
		H4.setAttribute("id", "posted-article-subtitle"  + counter);
		P1.setAttribute("id", "posted-written-article"  + counter);
		P2.setAttribute("id", "posted-time"  + counter);
		IMG1.setAttribute("id", "posted-image" + counter);
		IMG2.setAttribute("src", "http://www.clker.com/cliparts/n/J/7/9/S/x/thumbs-up-icon-black-md.png");
		IMG2.setAttribute("id", "blackLike-" + eval(counter + 4));
		IMG2.setAttribute("onclick", "changeImg(this.id)");
		SPAN1.setAttribute("id", "user");

		Ul1.insertBefore(Li1, Ul1.childNodes[0]);
		Li1.appendChild(Div1);
		Div1.appendChild(Div2);
		Div1.appendChild(Div8);
		Div2.appendChild(Div3);
		Div2.appendChild(Div4);
		Div3.appendChild(H3);
		$(Div9).insertAfter($(Div4));
		Div4.appendChild(H4);
		Div5.appendChild(Div6);
		Div5.appendChild(Div7);
		Div6.appendChild(Div11);
		Div6.appendChild(Div10);
		Div7.appendChild(IMG1);
		Div8.appendChild(Div5);
		Div9.appendChild(P2);
		Div10.appendChild(P3);
		Div11.appendChild(P1);
		P3.appendChild(P3Text);
		P3.appendChild(SPAN1);
		P3.appendChild(IMG2);
		
		
		numOfArticle++
		while (numOfArticle > 4){
			document.getElementById(i - 3).style.display = "none";
			numOfArticle = eval(numOfArticle - 1);
		}
		i++;
		x=i;
	}
}

function hiddenpostshow() {
	if (i > 4){
		x=i;
		var word = document.getElementById("morepost").innerHTML
		if (word == "More Post..."){
			document.getElementById("morepost").innerHTML= "Less Post...";
			while (x > 0){
				document.getElementById(x).style.display = "block";
				x--
			}
		}
		else if (word == "Less Post..."){
			document.getElementById("morepost").innerHTML= "More Post...";
			x = eval(x - 4);
			while (x > 0){
				document.getElementById(x).style.display = "none";
				x--
			}
		}
	} else{}
}

function posting() {
	if (confirmation == true) {
		var posttitle = document.getElementById("Title").value;
		var postsubtitle = document.getElementById("Subtitle").value;
		var postarticle = document.getElementById("Article").value;
		var postimage = document.getElementById("Image").value;
		document.getElementById("posted-article-title" + counter).innerHTML = posttitle;
		document.getElementById("posted-article-subtitle" + counter).innerHTML = postsubtitle;
		document.getElementById("posted-written-article" + counter).innerHTML = postarticle;
		document.getElementById("posted-image" + counter).src = postimage;
		document.getElementById("posted-image" + counter).style.width = width1 + "%";
		document.getElementById("posted-image" + counter).style.height = height1 + "px";
		if (counter == "") {
			$("#posted-article").hide();
			$("#posted-article-preview").click(function(){
				$("#posted-article").slideToggle("slow");
			});
		}
		else if (counter == 1) {
			$("#posted-article1").hide();
			$("#posted-article-preview1").click(function(){
				$("#posted-article1").slideToggle("slow");
			});
		}
		else if (counter == 2) {
			$("#posted-article2").hide();
			$("#posted-article-preview2").click(function(){
				$("#posted-article2").slideToggle("slow");
			});
		}
		else if (counter == 3) {
			$("#posted-article3").hide();
			$("#posted-article-preview3").click(function(){
				$("#posted-article3").slideToggle("slow");
			});
		}
		counter++
		document.getElementById("Title").value = "";
		document.getElementById("Subtitle").value = "";
		document.getElementById("Image").value = "";
		document.getElementById("Article").value = "";
	}
}

function changeImg(clicked_id) {
	var image = document.getElementById(clicked_id).src;
	if (image == "http://www.clker.com/cliparts/n/J/7/9/S/x/thumbs-up-icon-black-md.png"){
		document.getElementById(clicked_id).src = "http://bsccongress.com/im16/green-thumbs-up-clip-art_2.png";
	}
	else{
		document.getElementById(clicked_id).src = "http://www.clker.com/cliparts/n/J/7/9/S/x/thumbs-up-icon-black-md.png";
	}
}

function goBlog(){
  window.location ="blog.html";
}

/* Seleting Blog Based on Group */
$(document).ready(function() {
	var blogGroup1 = sessionStorage.getItem('bloggroup');
	if (blogGroup1 != null && blogGroup1 != ""){
		var blogGroup = JSON.parse(sessionStorage.getItem('bloggroup'));
		
		switch(blogGroup[0]){
			case "Anime":
					document.getElementById("title-1").innerHTML = "Pokemon GO";
					document.getElementById("subtitle-1").innerHTML = "Gotta catch 'em all";
					document.getElementById("written-1").innerHTML = "People say that Sean to this day is still waiting for it...";
					document.getElementById("img-1").src = "http://toucharcade.com/wp-content/uploads/2016/07/landscape-1456483171-pokemon2.jpg";
					
					document.getElementById("title-2").innerHTML = "Doraemon";
					document.getElementById("subtitle-2").innerHTML = "Your friendly blue cat(?)";
					document.getElementById("written-2").innerHTML = "That August 30, 2122 is the exact date when Doraemon's ears were eaten by mice. (Sorry I dont know what to write here)";
					document.getElementById("img-2").src = "http://www.spyderonlines.com/images/wallpapers/doraemon-images/doraemon-images-9.jpg";
					
					document.getElementById("title-3").innerHTML = "Digimon";
					document.getElementById("subtitle-3").innerHTML = "I forgot the purpose of the show";
					document.getElementById("written-3").innerHTML = "Woops... I thought this is pokemon.";
					document.getElementById("img-3").src = "http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/shows/banner_191.jpg";
					break;
					
			case "Belson":
					document.getElementById("title-1").innerHTML = "";
					document.getElementById("subtitle-1").innerHTML = "";
					document.getElementById("written-1").innerHTML = "";
					document.getElementById("img-1").src = "";
					
					document.getElementById("title-2").innerHTML = "";
					document.getElementById("subtitle-2").innerHTML = "";
					document.getElementById("written-2").innerHTML = "";
					document.getElementById("img-2").src = "";
					
					document.getElementById("title-3").innerHTML = "";
					document.getElementById("subtitle-3").innerHTML = "";
					document.getElementById("written-3").innerHTML = "";
					document.getElementById("img-3").src = "";
					break;
					
			case "Chinese":
					document.getElementById("title-1").innerHTML = "";
					document.getElementById("subtitle-1").innerHTML = "";
					document.getElementById("written-1").innerHTML = "";
					document.getElementById("img-1").src = "";
					
					document.getElementById("title-2").innerHTML = "";
					document.getElementById("subtitle-2").innerHTML = "";
					document.getElementById("written-2").innerHTML = "";
					document.getElementById("img-2").src = "";
					
					document.getElementById("title-3").innerHTML = "";
					document.getElementById("subtitle-3").innerHTML = "";
					document.getElementById("written-3").innerHTML = "";
					document.getElementById("img-3").src = "";
					break;
					
			case "French":
					document.getElementById("title-1").innerHTML = "";
					document.getElementById("subtitle-1").innerHTML = "";
					document.getElementById("written-1").innerHTML = "";
					document.getElementById("img-1").src = "";
					
					document.getElementById("title-2").innerHTML = "";
					document.getElementById("subtitle-2").innerHTML = "";
					document.getElementById("written-2").innerHTML = "";
					document.getElementById("img-2").src = "";
					
					document.getElementById("title-3").innerHTML = "";
					document.getElementById("subtitle-3").innerHTML = "";
					document.getElementById("written-3").innerHTML = "";
					document.getElementById("img-3").src = "";
					break;
					
			case "Gaming":
					document.getElementById("title-1").innerHTML = "";
					document.getElementById("subtitle-1").innerHTML = "";
					document.getElementById("written-1").innerHTML = "";
					document.getElementById("img-1").src = "";
					
					document.getElementById("title-2").innerHTML = "";
					document.getElementById("subtitle-2").innerHTML = "";
					document.getElementById("written-2").innerHTML = "";
					document.getElementById("img-2").src = "";
					
					document.getElementById("title-3").innerHTML = "";
					document.getElementById("subtitle-3").innerHTML = "";
					document.getElementById("written-3").innerHTML = "";
					document.getElementById("img-3").src = "";
					break;
					
			case "Gardening":
					document.getElementById("title-1").innerHTML = "";
					document.getElementById("subtitle-1").innerHTML = "";
					document.getElementById("written-1").innerHTML = "";
					document.getElementById("img-1").src = "";
					
					document.getElementById("title-2").innerHTML = "";
					document.getElementById("subtitle-2").innerHTML = "";
					document.getElementById("written-2").innerHTML = "";
					document.getElementById("img-2").src = "";
					
					document.getElementById("title-3").innerHTML = "";
					document.getElementById("subtitle-3").innerHTML = "";
					document.getElementById("written-3").innerHTML = "";
					document.getElementById("img-3").src = "";
					break;
					
			case "Money":
					document.getElementById("title-1").innerHTML = "";
					document.getElementById("subtitle-1").innerHTML = "";
					document.getElementById("written-1").innerHTML = "";
					document.getElementById("img-1").src = "";
					
					document.getElementById("title-2").innerHTML = "";
					document.getElementById("subtitle-2").innerHTML = "";
					document.getElementById("written-2").innerHTML = "";
					document.getElementById("img-2").src = "";
					
					document.getElementById("title-3").innerHTML = "";
					document.getElementById("subtitle-3").innerHTML = "";
					document.getElementById("written-3").innerHTML = "";
					document.getElementById("img-3").src = "";
					break;
					
			case "School":
					document.getElementById("title-1").innerHTML = "";
					document.getElementById("subtitle-1").innerHTML = "";
					document.getElementById("written-1").innerHTML = "";
					document.getElementById("img-1").src = "";
					
					document.getElementById("title-2").innerHTML = "";
					document.getElementById("subtitle-2").innerHTML = "";
					document.getElementById("written-2").innerHTML = "";
					document.getElementById("img-2").src = "";
					
					document.getElementById("title-3").innerHTML = "";
					document.getElementById("subtitle-3").innerHTML = "";
					document.getElementById("written-3").innerHTML = "";
					document.getElementById("img-3").src = "";
					break;
					
			case "Sports":
					document.getElementById("title-1").innerHTML = "";
					document.getElementById("subtitle-1").innerHTML = "";
					document.getElementById("written-1").innerHTML = "";
					document.getElementById("img-1").src = "";
					
					document.getElementById("title-2").innerHTML = "";
					document.getElementById("subtitle-2").innerHTML = "";
					document.getElementById("written-2").innerHTML = "";
					document.getElementById("img-2").src = "";
					
					document.getElementById("title-3").innerHTML = "";
					document.getElementById("subtitle-3").innerHTML = "";
					document.getElementById("written-3").innerHTML = "";
					document.getElementById("img-3").src = "";
					break;
					
			case "Weird":
					document.getElementById("title-1").innerHTML = "";
					document.getElementById("subtitle-1").innerHTML = "";
					document.getElementById("written-1").innerHTML = "";
					document.getElementById("img-1").src = "";
					
					document.getElementById("title-2").innerHTML = "";
					document.getElementById("subtitle-2").innerHTML = "";
					document.getElementById("written-2").innerHTML = "";
					document.getElementById("img-2").src = "";
					
					document.getElementById("title-3").innerHTML = "";
					document.getElementById("subtitle-3").innerHTML = "";
					document.getElementById("written-3").innerHTML = "";
					document.getElementById("img-3").src = "";
					break;
		}
		
		for(var a = 0; a < blogGroup.length; a++){
			var blogList = document.getElementById("bloglist");
			var group = document.createElement("li");
			var groupName = document.createTextNode(blogGroup[a]);
		
			group.setAttribute("onclick", "");
			
			group.appendChild(groupName);
			blogList.appendChild(group);
		}
		group.style.backgroundColor = "rgba(0, 76, 159, 0.7)";
		group.style.color = "white";
	} 
	else{}
});