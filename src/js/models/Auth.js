

export default class Auth {
    constructor () {

    }

    // Sign in based on email and password
    // return uid
    signin(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    console.log(user.toJSON());
                    var uid = user.uid;
                    return uid;
                } else {
                    console.log("user is logged out");
                }
            });
        })
        .catch((e) => { 
            console.log(e);
            return false;
        });
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