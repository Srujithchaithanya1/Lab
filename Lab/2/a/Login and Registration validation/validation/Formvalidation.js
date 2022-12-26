function validation() {
    var user_email = document.regist.email;
    var user_pass = document.regist.pass;
    var u_name = document.regist.name;
    if (nameVal(u_name)) {
        if (mailVal(user_email)) {
            if (passVal(user_pass, 7, 14)) { return true; }
        }
    }
    return false;
}
function nameVal(u_name)
{
    if(u_name.value != ""){
        return true;
    }
    else{
        alert("Enter Name");
        u_name.focus();
        return false;
    }
}
function mailVal(user_email) {
    var pattern = /^\w+([\.-]?\w+)*@([\.-]?\w+)*(\.\w{2,3})+$/;
    if (user_email.value.match(pattern)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        user_email.focus();
        return false;
    }
}

function passVal(user_pass, min, max) {
    var len = user_pass.value.length;
    if (len == 0 || len < min || len > max) {
        alert("Password length has to be in range" + min + "-" + max);
        user_pass.focus();
        return false;
    }
    else {
        alert("form submitted");
        return true;
    }
}