import uniqid from 'uniqid';

import Folder from './models/Folder';
import Auth from './models/Auth';
import * as folderView from './views/folderView';
import * as authView from './views/authView';
import { elements } from './views/base';

const state = {};

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsQGgP5D-o9MTYAnJHCO71d3tsswfspKY",
    authDomain: "concept-note.firebaseapp.com",
    databaseURL: "https://concept-note.firebaseio.com",
    projectId: "concept-note",
    storageBucket: "concept-note.appspot.com",
    messagingSenderId: "1085246316310",
    appId: "1:1085246316310:web:ab4215a915d9134b4b7a37",
    measurementId: "G-NKC01XV40W"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
} 

$(document).ready(function() {
    $('.notes-add').unbind('click').click(function() {
        folderView.addNote();
    });
});

const authController = () => {
    state.auth = new Auth();

    authView.openPage();
    authView.openLoginModal();

    authView.onSigninClick((email, password) => {
        state.auth.signin(email, password, (uid) => {
            if (uid) {
                state.uid = uid;
                authView.closeLoginModal();
                console.log(uid);
            } else {
                console.log('no uid');
            }
        });
    });
}

async function folderController() {
    var db = await firebase.database().ref(`users/${state.uid}/notedIDs`);
    console.log(db);
    // const retrieveFolders = () => {
    //     console.log(state.uid)
    //     var db = firebase.database().ref(`users/${state.uid}/notedIDs`);
    //     console.log(db.toString());
    // } 
}
 
$(document).ready(function() {
    authController();
    folderController();
})



// View functions not transfered to view files yet
$(document).delegate('.body-textarea', 'keydown', function(e) { 
    var keyCode = e.keyCode || e.which; 
    if (keyCode == 9) { 
      e.preventDefault(); 
      var start = $(this).get(0).selectionStart;
      var end = $(this).get(0).selectionEnd;
      $(this).val($(this).val().substring(0, start)
                  + "\t"
                  + $(this).val().substring(end));
      $(this).get(0).selectionStart = 
      $(this).get(0).selectionEnd = start + 1;
    } 
});

$(document).ready(function() {
    var mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 10,
        freeMode: true,

    })
})