function setIcon(iconNo){
  switch (iconNo) {

    case 'icon0':
    document.getElementById("changeableIcon").src="icons/icon0.jpg";
    /*document.getElementById("doLater").src="icons/icon0.jpg";*/
    sessionStorage.setItem("icon","0");
    break;

    case 'icon1':
    document.getElementById("changeableIcon").src="icons/icon1.jpg";
    /*document.getElementById("doLater").src="icons/icon0.jpg";*/
    sessionStorage.setItem("icon","1");
    break;

    default: console.log(iconNo);
    break;
  }
}
