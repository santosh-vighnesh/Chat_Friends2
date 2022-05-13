const firebaseConfig = {
    apiKey: "AIzaSyC2R9UDhTnIepmvtwMsQmWiHroLQtMsgDk",
    authDomain: "kwitter-app-4b46c.firebaseapp.com",
    projectId: "kwitter-app-4b46c",
    storageBucket: "kwitter-app-4b46c.appspot.com",
    messagingSenderId: "409309847423",
    appId: "1:409309847423:web:f9174f40cbd44a1a90044a",
    measurementId: "G-D89QTT4C5Z"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";


function add_room()
{
Room=document.getElementById().value;
firebase.database().ref("/").child(Room).update({
purpose:"adding_room_name"
});

localStorage.setItem("room_name",Room);
window.location="kwitter_page.html";
}


function getData()
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     console.log("Room_name" + Room_names);
     row="<div  class='room name' id="+Room_names+" onclick='redirect_to_room_name(this id)'>#" + Room_names + "</div> <hr>";
     document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirect_to_room_name(name)
{
    console.log(name);
    localStorage.setItem("Room_name",name);
    window.location="kwitter_page.html";
          
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");


}