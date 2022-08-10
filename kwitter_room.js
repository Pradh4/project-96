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
document.getElementById("user_name").innerHTML="Welcome " +  user_name + " !";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
console.log("room_name-"+Room_names);
row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML +=row;   
//End code
  });});}
getData();

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
     purpose:"Adding Room Name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
}

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"
}
