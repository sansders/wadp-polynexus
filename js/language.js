function setLanguage(){
  var language = sessionStorage.getItem('language');
  if(language === 'jp'){
    document.getElementById('tab-1').innerHTML="チャット";
    document.getElementById('tab-2').innerHTML="イベント";
    document.getElementById('tab-3').innerHTML="Settings";
    document.getElementById('tab-4').innerHTML="ブログ";
    document.getElementById('addchat').innerHTML="<i class='fa fa-plus-square-o' aria-hidden='true'></i> チャットを足す";
    document.getElementById('addevent').innerHTML= "<i class='fa fa-plus-square-o' aria-hidden='true'></i> イベントを開催する";
    document.getElementById('chatinputbox').placeholder="メセージを入力";  
  }
  else if(language === 'cn'){
    document.getElementById('tab-1').innerHTML="对话";
    document.getElementById('tab-2').innerHTML="活动";
    document.getElementById('tab-3').innerHTML="设定";
    document.getElementById('tab-4').innerHTML="博客";
  }
}
