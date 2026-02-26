import { initializeApp, getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, firebaseConfig } from "./firebase.js";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// -------------------------all id -------------------------
var btnSignup = document.getElementById("btnSignup");
var btnLogin = document.getElementById("btnLogin");
var btnSignout = document.getElementById("navbarLogout");
var googleSignIn = document.getElementById("btnGoogleSignup");

if (btnSignup) {
    btnSignup.addEventListener("click", signup);
}
if (btnSignout) {
    btnSignout.addEventListener("click", signout);
}



//  onAuthStateChanged
onAuthStateChanged(auth, (user) => {

    if (user) {
        var userRender = document.getElementById("renderUser");
        if (userRender) {
            userRender.innerHTML = `Welcome, ${user.email}`;
        }
    } else {
        var userRender = document.getElementById("renderUser");
        if (userRender) {
            userRender.innerHTML = "";
        }
    }
});



function signup() {
    var sEmail = document.getElementById("semail");
    var sPassword = document.getElementById("spassword");
    createUserWithEmailAndPassword(auth, sEmail.value, sPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}


// --------------------------sign in-------------------------
if (btnLogin) {
    btnLogin.addEventListener("click", login);
    function login() {
        var lEmail = document.getElementById("lemail");
        var lPassword = document.getElementById("lpassword");
        signInWithEmailAndPassword(auth, lEmail.value, lPassword.value)
            .then((userCredential) => {
                console.log("User signed in successfully");
                const user = userCredential.user;
                window.location.href = "./index.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
}


// sign out 
function signout() {
    signOut(auth).then(() => {
        window.location.href = "./login.html";
    }).catch((error) => {
    });
}

const provider = new GoogleAuthProvider();
// google sign in
if (googleSignIn) {
    googleSignIn.addEventListener("click", googleSignInFunc);
    function googleSignInFunc() {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                window.location.href = "./index.html";
                // ...
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
}