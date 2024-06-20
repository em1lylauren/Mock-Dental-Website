/*
    Emily Hartz-Kuzmicz
    job346
    11350337
    CMPT281
*/

/*
Submits the form on the "Contact Us" Page.
*/
function formSubmit() {
    let loginForm = document.getElementById("Form");

    loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //Take in all data from form
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let phonenum = document.getElementById("phonenum");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");

    //If any of the required field values are empty
    if (fname.value == "" || lname.value == "" || phonenum.value == "" || email.value == "" || subject.value == "" || message.value == "") {
        alert("The following values cannot be empty: First Name, Last Name, Phone Number, Email, Subject, Message.");

    } else {
        alert("Your contact request has been successfully submitted!");

        //Log the given data to the console
        console.log(
        `First Name: ${fname.value}\nLast Name: ${lname.value}\nPhone Number: ${phonenum.value}\nEmail: ${email.value}\nSubject: ${subject.value}\nMessage: ${message.value}`
        );

        //Set all values back to empty
        fname.value = "";
        lname.value = "";
        phonenum.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";
    }
    });
}