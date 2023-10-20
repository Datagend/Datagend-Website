const submitForm = (name, email, subject, message) => {

    // POST request using fetch()
    fetch("https://18bsbinhgi.execute-api.us-east-1.amazonaws.com/develop/datagend", {

            // Adding method type
            method: "POST",
            mode: 'no-cors',

            // Adding body or contents to send
            body: JSON.stringify({
                name: name,
                email: email,
                Subject: subject,
                Message: message,
            }),
        })

        // Converting to JSON
        .then(response => { 
            response.json();
            document.getElementById("sent").style.display="block";
        })

        // Displaying results to console
        .then(json => console.log(json));

}

const validateinputs = (event) => {
    event.preventDefault();
    let elements = document.getElementsByClassName('form-control');
    let submit = true;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  

    for (let i = 0, im = elements.length; im > i; i++) {
        if (elements[i].value === "") {
            // document.getElementById("error").style.display = "block";
            elements[i].style.border = "1px solid red";
            submit = false;
        }
    }
    if (submit) {
        submitForm(name, email, subject, message);
    }


} 