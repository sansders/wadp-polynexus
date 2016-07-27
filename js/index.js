function changeBackground(){
  var images = [1,2,3,4];
  var currentImg= images[Math.floor(Math.random()*images.length)];
  var string = "url('indeximg/"+currentImg+".jpg')";
  $('.signup').css('background-image', string);
}

$(document).ready(function(){
  changeBackground();
  setInterval(changeBackground, 50000);
});
