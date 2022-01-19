function sendmessage(){
  Name = document.getElementsByName("name").value;
  Email = document.getElementByNmae("token").value;
  Phonenumber = document.getElementById("message").value;
  $.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id);
  };