function openLogin() {
    var login = document.getElementById("login-window");
    var register = document.getElementById("register-window");
    var forgotPW = document.getElementById("forgot-password");

    if(register.style.display != "none") {
        register.style.display = "none";
    } else if(forgotPW.style.display != "none") {
        forgotPW.style.display = "none";
    }
    
    if (login.style.display === "none") {
        login.style.display = "block";
    } else {
        login.style.display = "none";
    }
}

function forgotPW() {
    var forgotPW = document.getElementById("forgot-password");
    var login = document.getElementById("login-window");
    if(login.style.display != "none") {
        login.style.display = "none";
    }
    
    if (forgotPW.style.display === "none") {
        forgotPW.style.display = "block";
    } else {
        forgotPW.style.display = "none";
    }
}

function returnForgotPW() {
    var forgotPW = document.getElementById("forgot-password");
    var login = document.getElementById("login-window");

    forgotPW.style.display = "none";
    login.style.display = "block";
}

function openRegister() {
    var register = document.getElementById("register-window");
    var login = document.getElementById("login-window");
    var forgotPW = document.getElementById("forgot-password");

    if(login.style.display != "none") {
        login.style.display = "none";
    } else if(forgotPW.style.display != "none") {
        forgotPW.style.display = "none";
    }

    if (register.style.display === "none") {
        register.style.display = "block";
    } else {
        register.style.display = "none";
    }
}