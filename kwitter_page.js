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


//End code
 } });  }); }
getData();
function send()
{
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name
       message:msg,
       like:0
 });

 document.getElementById("msg").value = "";
}