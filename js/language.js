function setLanguage(){
  var language = sessionStorage.getItem('language');
  if(language === 'jp'){
    document.getElementById('tab-1').innerHTML="チャット";
    document.getElementById('tab-2').innerHTML="イベント";
    document.getElementById('tab-3').innerHTML="セッティング";
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
  else if(language === 'fr'){
      document.getElementById('tab-1').innerHTML="Chats";
      document.getElementById('tab-2').innerHTML="Événements";
      document.getElementById('tab-3').innerHTML="Paramètres";
      document.getElementById('tab-4').innerHTML="Blogs";
      document.getElementById('chatinputbox').placeholder="Écrire un message";
      document.getElementById('eventsdesc').innerHTML="Vous ne pouvez joindre que des événements si vous êtes dans le groupe chat spécifié.";
      document.getElementById('settingsdesc').innerHTML="Changer la manière dont fonctionne l'application.";
      document.getElementById('settingsusernamedesc').innerHTML="Changer votre nom d'utilisateur";
      document.getElementById('settingspassworddesc').innerHTML="Changer votre mot de passe";
      document.getElementById('settingsblockedesc').innerHTML="Afficher une liste des utilisateurs bloqués";
      document.getElementById('settingsthemedesc').innerHTML="Changer l'apparence de l'application";
      document.getElementById('addevent').innerHTML= "<i class='fa fa-plus-square-o' aria-hidden='true'></i> Créer un événement";
  }
}
