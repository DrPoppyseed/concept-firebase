

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

    async accessUserFolder(uid) {
        var noteIDs;
        var notes = await firebase.database().ref(`/users/${uid}/noteIDs`).once('value')
            .then(async (snapshot) => {
                noteIDs = snapshot.val().toString().split(", ");
                console.log(noteIDs);
                var notes = [];
                for (let i = 0; i < noteIDs.length; i++) {
                    const noteID = noteIDs[i];
                    const note = await this.accessUserFolderHelper(noteID);
                    console.log(`noteID: ${noteID}, note: ${note}`)
                    notes.push({
                        nid: noteID,
                        n: note
                    });
                }
                return notes;
            })
            .catch((err) => {
                console.log(err);
            })
        console.log(notes);
        return notes;
    }

    async accessUserFolderHelper(noteID) {
        var note = await firebase.database().ref(`/notes/${noteID}/val`).once('value')
            .then(async (snapshot) => {
                var val = await snapshot.val().toString();
                return val;
            })
            .catch((err) => {
                console.log(`FROM acessUserFolderHelper: ${err}`);
            }) 
        return note;
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