function sendEmail(from,body) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "",
        Password: "",
        To : '',
        From : from,
        Subject : "Email Website " + from,
        Body : body,
    }).then(
        message=> alert("mail sent successfully")
    );
}