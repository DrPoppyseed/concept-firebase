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

export const onSigninClick = (func) => {
    $('.auth-submit-btn--signin').unbind('click').click(function(e) {
        e.preventDefault();
        var signinEmail = $('#signin-email').val();
        var signinPassword = $('#signin-password').val();
        console.log(`email:${signinEmail} password:${signinPassword}`);
        func(signinEmail, signinPassword);
    });
};

export const onSignupClick = (func) => {
    $('.auth-submit-btn--signup').unbind('click').click(function(e) {
        e.preventDefault();
        var signupUsername = $('#signup-username').val();
        var signupEmail = $('#signup-email').val();
        var signupPassword = $('#signup-password').val();
        var signupPhone = $('#signup-phone').val();
        console.log(`username:${signupUsername} email:${signupEmail} password:${signupPassword} phone:${signupPhone}`);
        func(signupUsername, signupEmail, signupPassword, signupPhone);
    });
};
