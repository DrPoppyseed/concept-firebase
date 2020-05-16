import * as firebase from 'firebase';

export default class Folder {
    constructor() {
    }

    async createNewFolder() {
        try {
            var db = await firebase.database().ref(``)
            console.log(db);
        } catch (err) {
            console.log(err);
        }
    }

    async retrieveFolders() {
        try {
            var db = await firebase.database().ref(`users/${this.uid}/notedIDs`);
            console.log(db);
        } catch (err) {
            console.log(err)
        }
    }
}