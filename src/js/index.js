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
    firebase.analytics();
} 

$(document).ready(function() {
    $('.notes-add').unbind('click').click(function() {
        folderView.addNote();
    });
});

const authController = async () => {
    var signinData = authView.onSigninClick();
    state.auth = new Auth(signinData[0], signinData[1], null, null);

    authView.openPage();
    authView.openLoginModal();
    
    // authView.onSigninClick((email, password) => {
    //     var uid = state.auth.signin(email, password);
    //     // setInterval((uid) => {
    //     //     if (uid) {
    //     //         //if signin succeeds
    //     //         var uid = state.auth.signin(email, password);
    //     //         console.log(uid);
    
    //     //     } else {
    //     //         //if signin is unsuccessful
    //     //         console.log('signin usuccessful');
    //     //     }
    //     // }, 1000);
    // });
}
 
$(document).ready(function() {
    authController();
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

// var db = firebase.database().ref("users/jayshimada");

// const getNoteIds = () => {
//     return db.once('value').then((e) => {
//         console.log(e.val());
//     })
// }

// getNoteIds();