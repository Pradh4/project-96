//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyB_EhJ9VMUFs_kTAvsBgZSAHllKJPzjFQo",
authDomain: "kwitterappnew.firebaseapp.com",
databaseURL: "https://kwitterappnew-default-rtdb.firebaseio.com",
projectId: "kwitterappnew",
storageBucket: "kwitterappnew.appspot.com",
messagingSenderId: "705767337408",
appId: "1:705767337408:web:e82b43e2bba38c570aac25"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
     
//Start code

//End code
    } });  }); }
getData();

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name: user_name,
    message:msg,
    like:0
    });
    document.getElementById("msg").value="";
}
