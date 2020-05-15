import firebase from 'firebase';
import axios from 'axios';

export default class Folder {
    constructor() {

    }

    retrieveFolders(uid) {
        var db = firebase.database().ref(`users/${uid}`);
        console.log(db);
    }
}