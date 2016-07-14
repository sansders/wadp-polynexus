var language = sessionStorage.getItem('language');
function setLanguage(language){
  if(language === 'jp'){
    document.getElementById('tab-1').innerHTML="チャット";
    document.getElementById('tab-2').innerHTML="イベント";
    document.getElementById('tab-3').innerHTML="セッティング";
    document.getElementById('tab-4').innerHTML="ブログ";
    document.getElementById('addchat').innerHTML="<i class='fa fa-plus-square-o' aria-hidden='true'></i> チャットを足す";
    document.getElementById('addevent').innerHTML= "<i class='fa fa-plus-square-o' aria-hidden='true'></i> イベントを開催する";
    document.getElementById('chatinputbox').placeholder="メセージを入力";
    document.getElementById('eventsdesc').innerHTML="You can only join events if you are in the specified chat group.";
    document.getElementById('settingsdesc').innerHTML="Change how the application works.";
    document.getElementById('settingsusernamedesc').innerHTML="Change your username.";
    document.getElementById('settingspassworddesc').innerHTML="Change your password.";
    document.getElementById('settingsblockedesc').innerHTML="Displays a list of blocked users.";
    document.getElementById('settingsthemedesc').innerHTML="Change the look and feel of the application.";
    document.getElementById('addevent').innerHTML= "<i class='fa fa-plus-square-o' aria-hidden='true'></i> Create an event.";
  }
  else if(language === 'cn'){
    document.getElementById('tab-1').innerHTML="对话";
    document.getElementById('tab-2').innerHTML="活动";
    document.getElementById('tab-3').innerHTML="设定";
    document.getElementById('tab-4').innerHTML="博客";
    document.getElementById('addchat').innerHTML="<i class='fa fa-plus-square-o' aria-hidden='true'></i> Add a group";
    document.getElementById('chatinputbox').placeholder="Type a message";
    document.getElementById('eventsdesc').innerHTML="You can only join events if you are in the specified chat group.";
    document.getElementById('settingsdesc').innerHTML="Change how the application works.";
    document.getElementById('settingsusernamedesc').innerHTML="Change your username.";
    document.getElementById('settingspassworddesc').innerHTML="Change your password.";
    document.getElementById('settingsblockedesc').innerHTML="Displays a list of blocked users.";
    document.getElementById('settingsthemedesc').innerHTML="Change the look and feel of the application.";
    document.getElementById('addevent').innerHTML= "<i class='fa fa-plus-square-o' aria-hidden='true'></i> Create an event.";
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
  else if(language === 'en'){
    document.getElementById('tab-1').innerHTML="Chats";
    document.getElementById('tab-2').innerHTML="Events";
    document.getElementById('tab-3').innerHTML="Settings";
    document.getElementById('tab-4').innerHTML="Blog";
    document.getElementById('chatinputbox').placeholder="Type a message";
    document.getElementById('eventsdesc').innerHTML="You can only join events if you are in the specified chat group.";
    document.getElementById('settingsdesc').innerHTML="Change how the application works.";
    document.getElementById('settingsusernamedesc').innerHTML="Change your username.";
    document.getElementById('settingspassworddesc').innerHTML="Change your password.";
    document.getElementById('settingsblockedesc').innerHTML="Displays a list of blocked users.";
    document.getElementById('settingsthemedesc').innerHTML="Change the look and feel of the application.";
    document.getElementById('addevent').innerHTML= "<i class='fa fa-plus-square-o' aria-hidden='true'></i> Create an event.";
    document.getElementById('addchat').innerHTML="<i class='fa fa-plus-square-o' aria-hidden='true'></i> Add a group";
  }
}
