function contactvalidation(){
    var fullName = document.getElementById('fullName').value; 
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)'$/;
    let regName = /\d+/g;

    if (fullName == "" || regName.test(fullName)) {
        alert("please enter your Name properly.");
        fullName.focus();
        return false;
    }
    if (email ==  "" || regEmail.test(email)) {
        alert("please enter your Email properly.");
        email.focus();
        return false;
    }
    if (subject ==  "" || regName.test(subject)) {
        alert("please enter your Email properly.");
        subject.focus();
        return false;
    }
    if (message == "" || regName.test(message)) {
        alert("please enter message properly.");
        message.focus();
        return false;
    }
}

