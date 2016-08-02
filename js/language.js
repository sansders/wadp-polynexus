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
	console.log("Current Language: Japanese");
  }
  else if(language === 'cn'){
    document.getElementById('tab-1').innerHTML="对话";
    document.getElementById('tab-2').innerHTML="活动";
    document.getElementById('tab-3').innerHTML="设定";
    document.getElementById('tab-4').innerHTML="博客";
    document.getElementById('chatinputbox').placeholder="输入信息";
	document.getElementById('event1-1').innerHTML="活动";
    document.getElementById('eventsdesc').innerHTML="You can only join events if you are in the specified chat group.";
	document.getElementById('event1-2').innerHTML="<i class='eventtitle' aria-hidden='true'></i>举办活动";
	document.getElementById('event1-3').innerHTML="活动名称:";
	document.getElementById('event1-4').innerHTML="活动类型:";
	document.getElementById('event1-5').innerHTML="日期:";
	document.getElementById('event1-6').innerHTML="时间:";
	document.getElementById('event1-7').innerHTML="地点:";
	document.getElementById('event1-8').innerHTML="活动描述:";
	document.getElementById('settings').innerHTML= "设置";
    document.getElementById('settingsdesc').innerHTML= "更改应用程序的功能";
	document.getElementById('setting1h3').innerHTML= "<i class='fa fa-user' aria-hidden='true'></i> 帐号";
    document.getElementById('settingsusernamedesc').innerHTML="更改用户名";
	document.getElementById('setting1-1').innerHTML= "帐号";
	document.getElementById('setting1-2').innerHTML= "请选择您喜欢的帐号";
	document.getElementById('displaycurrentid').innerHTML= "当前帐号:";
	document.getElementById('setting1-3').innerHTML= "新帐号:";
	document.getElementById('setting1-4').innerHTML= "<span>更改帐号</span>";
	document.getElementById('setting2h3').innerHTML= "<i class='fa fa-lock' aria-hidden='true'></i> 密码";
    document.getElementById('settingspassworddesc').innerHTML="更改密码";
	document.getElementById('setting2-1').innerHTML= "密码";
	document.getElementById('setting2-2').innerHTML= "请选择一个安全的密码";
	document.getElementById('setting2-3').innerHTML= "当前密码:";
	document.getElementById('setting2-4').innerHTML= "新密码:";
	document.getElementById('setting2-5').innerHTML= "重新输入新密码:";
	document.getElementById('setting2-6').innerHTML= "更改密码";
	document.getElementById('setting3h3').innerHTML= "<i class='fa fa-user-times' aria-hidden='true'></i> 拉黑用户";
    document.getElementById('settingsblockedesc').innerHTML="被查封的用户的名单";
	document.getElementById('setting3-1').innerHTML= "拉黑用户";
	document.getElementById('setting3-2').innerHTML= "管理拉黑用户";
	document.getElementById('setting3-3').innerHTML= "唐纳德·特朗普 <button class='unblockbutton'>Unblock</button>";
	document.getElementById('setting3-4').innerHTML= "尤金 <button class='unblockbutton'>Unblock</button>";
	document.getElementById('setting3-5').innerHTML= "DJKeemstar <button class='unblockbutton'>Unblock</button>";
	document.getElementById('setting4h3').innerHTML= "<i class='fa fa-paint-brush' aria-hidden='true'></i> 网页设计";
    document.getElementById('settingsthemedesc').innerHTML="改变应用的外表和感觉";
	document.getElementById('setting4-1').innerHTML= "网页设计";
	document.getElementById('setting4-2').innerHTML= "请选择一个新的网页设计";
	document.getElementById('setting5h3').innerHTML= "<i class='fa fa-globe' aria-hidden='true'></i> 语言";
	document.getElementById('settingslanguagedesc').innerHTML= "更改应用程序的语言";
	document.getElementById('setting5-1').innerHTML= "语言";
	document.getElementById('setting5-2').innerHTML= "翻译可能不完全或准确，请与我们承担 :)";
	document.getElementById('setting6h3').innerHTML= "<i class='fa fa-question' aria-hidden='true'></i> 图标";
	document.getElementById('settingsiconsdesc').innerHTML= "改变你的图标";
	document.getElementById('setting6-1').innerHTML= "用户图标";
	document.getElementById('setting6-2').innerHTML= "请选择一个图标";
	document.getElementById('setting6-3').innerHTML= "您目前的图标:<img src='icons/icon0.jpg' id='changeableIcon'>";
    document.getElementById('addevent').innerHTML= "<i class='fa fa-plus-square-o' aria-hidden='true'></i> 创建活动";
	document.getElementById('addchat').innerHTML="<i class='fa fa-plus-square-o' aria-hidden='true'></i> 创建小组";
	console.log("Current Language: Chinese");
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
      console.log("running");
	  document.getElementById('settingspassworddesc').innerHTML="Changer votre mot de passe";
      document.getElementById('settingsblockedesc').innerHTML="Afficher une liste des utilisateurs bloqués";
      document.getElementById('settingsthemedesc').innerHTML="Changer l'apparence de l'application";
      document.getElementById('addevent').innerHTML= "<i class='fa fa-plus-square-o' aria-hidden='true'></i> Créer un événement";
	  console.log("Current Language: French");
  }
  else if(language === 'en'){
    document.getElementById('tab-1').innerHTML="Chats";
    document.getElementById('tab-2').innerHTML="Events";
    document.getElementById('tab-3').innerHTML="Settings";
    document.getElementById('tab-4').innerHTML="Blog";
    document.getElementById('chatinputbox').placeholder="Type a message";
	document.getElementById('event1-1').innerHTML="Events";
    document.getElementById('eventsdesc').innerHTML="You can only join events if you are in the specified chat group.";
	document.getElementById('event1-2').innerHTML="<i class='eventtitle' aria-hidden='true'></i>Organize an event ";
	document.getElementById('event1-3').innerHTML="Event Name:";
	document.getElementById('event1-4').innerHTML="Event Type:";
	document.getElementById('event1-5').innerHTML="Date:";
	document.getElementById('event1-6').innerHTML="Time:";
	document.getElementById('event1-7').innerHTML="Venue:";
	document.getElementById('event1-8').innerHTML="Event description:";
	document.getElementById('settings').innerHTML= "Settings";
    document.getElementById('settingsdesc').innerHTML="Change how the application works.";
	document.getElementById('setting1h3').innerHTML= "<i class='fa fa-user' aria-hidden='true'></i> Username";
	document.getElementById('settingsusernamedesc').innerHTML="Change your username.";
	document.getElementById('setting1-1').innerHTML= "Username";
	document.getElementById('setting1-2').innerHTML= "Please select a username of your liking.";
	document.getElementById('displaycurrentid').innerHTML= "Current Username:";
	document.getElementById('setting1-3').innerHTML= "New Username:";
	document.getElementById('setting1-4').innerHTML= "<span>Change Username</span>";
	document.getElementById('setting2h3').innerHTML= "<i class='fa fa-lock' aria-hidden='true'></i> Password";
	document.getElementById('settingspassworddesc').innerHTML="Change your password";
	document.getElementById('setting2-1').innerHTML= "Password";
	document.getElementById('setting2-2').innerHTML= "Please choose a secure password.";
	document.getElementById('setting2-3').innerHTML= "Current Password:";
	document.getElementById('setting2-4').innerHTML= "New Password:";
	document.getElementById('setting2-5').innerHTML= "Re-enter Password:";
	document.getElementById('setting2-6').innerHTML= "Change Password";
	document.getElementById('setting3h3').innerHTML= "<i class='fa fa-user-times' aria-hidden='true'></i> Blocked Users";
    document.getElementById('settingsblockedesc').innerHTML="Displays a list of blocked users.";
	document.getElementById('setting3-1').innerHTML= "Blocked Users";
	document.getElementById('setting3-2').innerHTML= "Manage blocked users.";
	document.getElementById('setting3-3').innerHTML= "Donald Trump <button class='unblockbutton'>Unblock</button>";
	document.getElementById('setting3-4').innerHTML= "Eugene <button class='unblockbutton'>Unblock</button>";
	document.getElementById('setting3-5').innerHTML= "DJKeemstar <button class='unblockbutton'>Unblock</button>";
	document.getElementById('setting4h3').innerHTML= "<i class='fa fa-paint-brush' aria-hidden='true'></i> Theme";
    document.getElementById('settingsthemedesc').innerHTML="Change the look and feel of the application.";
	document.getElementById('setting4-1').innerHTML= "Theme";
	document.getElementById('setting4-2').innerHTML= "Please select a new look";
	document.getElementById('setting5h3').innerHTML= "<i class='fa fa-globe' aria-hidden='true'></i> Language";
	document.getElementById('settingslanguagedesc').innerHTML= "Change the language of the application.";
	document.getElementById('setting5-1').innerHTML= "Language";
	document.getElementById('setting5-2').innerHTML= "Translations might not be complete/accurate, please bear with us :)";
	document.getElementById('setting6h3').innerHTML= "<i class='fa fa-question' aria-hidden='true'></i> Icon";
	document.getElementById('settingsiconsdesc').innerHTML= "Change your icon!";
	document.getElementById('setting6-1').innerHTML= "User Icon";
	document.getElementById('setting6-2').innerHTML= "Please select an icon";
	document.getElementById('setting6-3').innerHTML= "Your current icon is:<img src='icons/icon0.jpg' id='changeableIcon'>";
    document.getElementById('addevent').innerHTML= "<i class='fa fa-plus-square-o' aria-hidden='true'></i> Create an event.";
    document.getElementById('addchat').innerHTML="<i class='fa fa-plus-square-o' aria-hidden='true'></i> Add a group";
	console.log("Current Language: English");
  }
}
