document.getElementById("name").innerHTML = "Welcome " + localStorage.getItem("user_name");
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDpMNRi1nOa_bm9HWrswNUQyq4ghompaKU",
      authDomain: "einstein-ljur.firebaseapp.com",
      databaseURL: "https://einstein-ljur-default-rtdb.firebaseio.com",
      projectId: "einstein-ljur",
      storageBucket: "einstein-ljur.appspot.com",
      messagingSenderId: "46289300521",
      appId: "1:46289300521:web:b96d458f6bd6f2f53a4038",
      measurementId: "G-KJ2KM2QFKD"
};
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room_name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addUser() {
      username = localStorage.getItem("username");
      firebase.database().ref("/").child(username).update({
            purpose: "adding user",
            food: "biryani"

      })
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
