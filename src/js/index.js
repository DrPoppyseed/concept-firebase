// import uniqid from 'uniqid';

import Folder from './models/Folder';
import Auth from './models/Auth';
import * as folderView from './views/folderView';
import * as authView from './views/authView';
import { elements } from './views/base';

var state = {};

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
    firebase.analytics();
}

const controller = () => {
    state.auth = new Auth();
    state.folder = new Folder();

    authView.openPage();
    authView.openLoginModal();

    authView.onSigninClick((email, password) => {
        state.auth.signin(email, password, (uid) => {
            if (uid) {
                state.uid = uid;
                authView.closeLoginModal();
                console.log(state.uid);
                state.auth.accessUserFolder(state.uid)
                    .then((notes) => {
                        state.notes = notes;
                        console.log(`notes from authController: ${state.notes}`)
                        authView.openUserFolder(notes);

                        folderView.openNote();
                        folderView.addNote(state.uid, (uid, id) => {
                            state.folder.createNewNote(uid, id)
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else {
                console.log('no uid');
            }
        });
    });
}

 
$(document).ready(function() {
    controller();
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