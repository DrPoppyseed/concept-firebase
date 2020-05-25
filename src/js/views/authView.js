import { elements } from './base';

export const openLoginModal = () => {
    let counter = true;
    $('.login-button').unbind('click').click(function(e) {
        e.preventDefault();
        console.log('login-button click');
        if (counter) {
            $('.modal-container').css('display', 'block');
            $('.body-container').css('display', 'none');
            $('.login-button').addClass('active-login-button');
            counter = false;
        } else {
            $('.modal-container').css('display', 'none');
            $('.body-container').css('display', 'block');
            $('.login-button').removeClass('active-login-button');
            counter = true;
        }
    });
};

export const closeLoginModal = () => {
    $('.modal-container').css('display', 'none');
    $('.body-container').css('display', 'block');
    $('.login-button').removeClass('active-login-button');
    $('.login-button-text').text("LOGOUT");
}

export const openPage = () => {
    $('#signin-page').css('display', 'flex');
    $('#signup-page').css('display', 'none');
    $('.signin-header-btn').addClass('active-header-btn');

    $('.signin-header-btn').unbind('click').click(function(e) {
        e.preventDefault();
        console.log('signin')
        $('#signin-page').css('display', 'flex');
        $('#signup-page').css('display', 'none');
        $('.signin-header-btn').addClass('active-header-btn');
        $('.signup-header-btn').removeClass('active-header-btn');
    });
    $('.signup-header-btn').unbind('click').click(function(e) {
        e.preventDefault();
        console.log('signup')
        $('#signup-page').css('display', 'flex');
        $('#signin-page').css('display', 'none');
        $('.signin-header-btn').removeClass('active-header-btn');
        $('.signup-header-btn').addClass('active-header-btn');
    });
};

export const onSigninClick = (callback) => {
    // $(document).unbind('keypress').keypress(function(e){
    //     var keycode = (e.keyCode ? e.keyCode : e.which);
    //     if(keycode == '13'){
    //         onSigninClickHelper(callback);
    //     }
    // });
    $('.auth-submit-btn--signin').unbind('click').click(function(e) {
        e.preventDefault();
        onSigninClickHelper(callback);
    });
};

const onSigninClickHelper = (callback) => {
    var signinEmail = $('#signin-email').val();
    var signinPassword = $('#signin-password').val();
    console.log(`email:${signinEmail} password:${signinPassword}`);
    callback(signinEmail, signinPassword);
}

export const openUserFolder = (notes) => {
    for (let i = 0; i < notes.length; i++) {
        const id = notes[i].nid;
        const text = notes[i].n.substring(0, 30);
        elements.notesContainer.insertAdjacentHTML('beforeend', authAddNotesItem(id, text));
    }
}

const authAddNotesItem = (id, text) => {
    const html = 
        `
            <div class='notes-item swiper-slide' id='${id}'>
                <p class='notes-item-title'>${text}</p>
            </div>
        `;
    return html;
}

export const onSignupClick = (callback) => {
    $('.auth-submit-btn--signup').unbind('click').click(function(e) {
        e.preventDefault();
        var signupUsername = $('#signup-username').val();
        var signupEmail = $('#signup-email').val();
        var signupPassword = $('#signup-password').val();
        var signupPhone = $('#signup-phone').val();
        console.log(`username:${signupUsername} email:${signupEmail} password:${signupPassword} phone:${signupPhone}`);
        callback(signupEmail, signupPassword, signupUsername, signupPhone);
    });
};
