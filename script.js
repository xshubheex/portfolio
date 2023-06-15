function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "shubhe1223@gmail.com",
        Password : "password",
        To : 'shubhe1223@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

