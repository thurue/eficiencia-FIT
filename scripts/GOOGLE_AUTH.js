//import firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDmtng-wk0NNawnBfXLkHHg4qLhonSiVZ4",
    authDomain: "portal-f41d4.firebaseapp.com",
    databaseURL: "https://portal-f41d4-default-rtdb.firebaseio.com",
    projectId: "portal-f41d4",
    storageBucket: "portal-f41d4.appspot.com",
    messagingSenderId: "818353305477",
    appId: "1:818353305477:web:2ff5be76fc19d76aabb6ec",
    measurementId: "G-FNG514GWPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

let nameInp = document.getElementById('nameInp')
let phoneInp = document.getElementById('phoneInp')
let passwordInp = document.getElementById('passwordInp')
let signupForm = document.getElementById('signup-form')

let completo = document.querySelector('.completo')



// AUTH com o botao do google
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

let GoogleLogin = document.getElementById('GOOGLElogin')
const providerGOOGLE = new GoogleAuthProvider()

const signIn = async () => {
    signInWithPopup(auth, providerGOOGLE)
        .then((result) => {
            const user = result.user;
            console.log(user);
            set(ref(db, 'UsersAuthListWithGoogle/' + user.displayName), {
                NomeCompleto: user.displayName,
                Email: user.email
            }
            )
            setTimeout(() => { window.location.href = 'home.html' }, 1000)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
}

GoogleLogin.addEventListener('click', signIn)
