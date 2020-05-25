import uniqid from 'uniqid';
import timestamp from 'time-stamp';

export default class Folder {
    constructor() {
    }

    createNewNote(uid, noteID) {
        var db = firebase.database();
        db.ref(`notes`).child(`${noteID}`).set({
            lastEdited: timestamp('YYYY/MM/DD/HH:mm:ss'),
            timeCreated: timestamp('YYYY/MM/DD/HH:mm:ss'),
            user: uid,
            val: ''
        })
            .then(async () => {
                var currentNotes = await db.ref(`users/${uid}/noteIDs`).once('value')
                    .then(async (s) => {
                        var val = await s.val().toString();
                        return val;
                    })
                    .catch((err) => {
                        console.log(`FROM Folder.createNewNote() inner function: ${err}`);
                    })
                db.ref(`users/${uid}`).update({
                    "noteIDs": `${currentNotes}, ${noteID}`
                });
            })
            .catch((err) => {
                console.log(`FROM Folder.createNewNote(): ${err}`);
            })
        // try {
        //     var db = firebase.database();
        //     // var newNote = 
        //     //     noteID: {

        //     //     }
            
        //     db.ref(`notes/`).push(noteID);
        // } catch (err) {
        //     console.log(err);
        // }
    }
    
    deleteNote(uid, noteID) {
        
    }

    openNote() {
        
    }

    // async createNewFolder() {
    //     try {
    //         var db = await firebase.database().ref(``)
    //         console.log(db);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // async retrieveFolders() {
    //     try {
    //         var db = await firebase.database().ref(`users/${this.uid}/notedIDs`);
    //         console.log(db);
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

}