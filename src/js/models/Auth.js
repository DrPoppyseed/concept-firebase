

export default class Auth {
    constructor () {

    }

    // Sign in based on email and password
    // return uid
    signin(email, password, callback) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    callback(user.uid);
                } else {
                    console.log("user is logged out");
                    callback(false);
                }
            });
        })
        .catch((e) => { 
            console.log(e);
            return false;
        });
    }

    signinVerification(email, password) {
        if (email.equals('EMAIL') || password.equals('PASSWORD')) { 
        
        }
    }

    signup(username, email, password, phone) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {

            })
            .catch((e) => {
                console.log(e);
            })
    }

    // googleSignin() {
    //     var provider = new firebase.auth.GoogleAuthProvider();
    //     provider.addScope('https://www.googleapis.com/auth/contacts.readonly'))
    // }
}