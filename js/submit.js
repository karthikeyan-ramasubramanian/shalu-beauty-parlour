function sendmessage(){
  Name : document.getElementsById("name").value;
  Email : document.getElementById("email").value;
  Phonenumber : document.getElementById("phone number").value;
  Message : document.getElementById("message").value;
  console.log(Name);
  $.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id);
  };