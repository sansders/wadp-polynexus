var iconNo;
$(document).ready(function(){
  iconNo = sessionStorage.getItem('icon');
  setIcon(iconNo);
});

function setIcon(iconNo){
  switch (iconNo) {

    case 'icon0':
    document.getElementById("changeableIcon").src="icons/icon0.jpg";
    document.getElementById("changeableIcon1").src="icons/icon0.jpg";
    sessionStorage.setItem("icon","icon0");
    break;

    case 'icon1':
    document.getElementById("changeableIcon").src="icons/icon1.jpg";
    document.getElementById("changeableIcon1").src="icons/icon1.jpg";
    sessionStorage.setItem("icon","icon1");
    break;

    case 'icon2':
    document.getElementById("changeableIcon").src="icons/icon2.jpg";
    document.getElementById("changeableIcon1").src="icons/icon2.jpg";
    sessionStorage.setItem("icon","icon2");
    break;

    case 'icon3':
    document.getElementById("changeableIcon").src="icons/icon3.jpg";
    document.getElementById("changeableIcon1").src="icons/icon3.jpg";
    sessionStorage.setItem("icon","icon3");
    break;

    case 'icon4':
    document.getElementById("changeableIcon").src="icons/icon4.jpg";
    document.getElementById("changeableIcon1").src="icons/icon4.jpg";
    sessionStorage.setItem("icon","icon4");
    break;

    case 'icon5':
    document.getElementById("changeableIcon").src="icons/icon5.jpg";
    document.getElementById("changeableIcon1").src="icons/icon5.jpg";
    sessionStorage.setItem("icon","icon5");
    break;

    case 'icon6':
    document.getElementById("changeableIcon").src="icons/icon6.jpg";
    document.getElementById("changeableIcon1").src="icons/icon6.jpg";
    sessionStorage.setItem("icon","icon6");
    break;

    case 'icon7':
    document.getElementById("changeableIcon").src="icons/icon7.jpg";
    document.getElementById("changeableIcon1").src="icons/icon7.jpg";
    sessionStorage.setItem("icon","icon7");
    break;

    default: console.log(iconNo);
    break;
  }
}
