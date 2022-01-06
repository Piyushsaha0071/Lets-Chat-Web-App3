var firebaseConfig = {
    apiKey: "AIzaSyDLWOPo2UN3c4-qgZA98tbKoL6O-LIlHnM",
    authDomain: "kwitter-181bd.firebaseapp.com",
    databaseURL: "https://kwitter-181bd-default-rtdb.firebaseio.com",
    projectId: "kwitter-181bd",
    storageBucket: "kwitter-181bd.appspot.com",
    messagingSenderId: "908235688476",
    appId: "1:908235688476:web:34304398f29707d150edd9",
    measurementId: "G-E2JSNHEHSR"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name']
         message = message_data['message']
         name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+ "onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ likr +"/span></button><hr>";


//End code
 } });  }); }
getData();
function send()
{
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });

 document.getElementById("msg").value = "";
}

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().re(room_name).child(message_id).update({
            like : updated_likes
      });
}