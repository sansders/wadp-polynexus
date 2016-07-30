function goBlog(){
  window.location ="blog.html";
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
  sessionStorage.removeItem('icon');
}

$(".fa fa-bars").click(function(){
    $(".intro").css("padding-top", "0px;");
});
