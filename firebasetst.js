  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDvXSkQBq2NpdaGvrQkxxQX5OpL-Odt-sg",
    authDomain: "log-in-ex.firebaseapp.com",
    projectId: "log-in-ex",
    storageBucket: "log-in-ex.appspot.com",
    messagingSenderId: "407818928799",
    appId: "1:407818928799:web:319f5789fbf886485a58aa"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const auth = getAuth()

//submit

const submit = document.getElementById('submit');
submit.addEventListener("click",function(e){
  e.preventDefault()

  
//inputs
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;


  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account......")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert('sorry error')
    // ..
  });

  })


