/*
    Emily Hartz-Kuzmicz
    job346
    11350337
    CMPT281
*/

/*
Submits the form on the "Booking" Page.
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
    let returning_patient, contact_method;

    //Check which radio button is selected for returning patient
    if (document.getElementById("returning_patientyes").checked) {
        returning_patient = "yes";
    } else {
        returning_patient = "no";
    }

    //Check which radio button is selected for contact method
    if (document.getElementById("contact_methodphone").checked) {
        contact_method = "phone";
    } else {
        contact_method = "email";
    }

    let day = document.getElementById("day");
    let time = document.getElementById("time");
    let message = document.getElementById("message");

    //If any of the required field values are empty
    if (fname.value == "" || lname.value == "" || phonenum.value == "" || email.value == "" || message.value == "") {
        alert("The following values cannot be empty: First Name, Last Name, Phone Number, Email.");

    } else {
        alert("Your appointment request has been successfully submitted!");

        //Log the given data to the console
        console.log(
        `First Name: ${fname.value}\nLast Name: ${lname.value}\nPhone Number: ${phonenum.value}\nEmail: ${email.value}\n`
        );

        console.log(
            `Returning Patient: ${returning_patient}\nContact Method: ${contact_method}\n`
        );

        console.log(
            `Requested Day: ${day.value}\nRequested Time: ${time.value}\nMessage: ${message.value}\n`
        );

        //Set all values back to empty
        fname.value = "";
        lname.value = "";
        phonenum.value = "";
        email.value = "";

        day.value = "monday";
        time.value = "9";
        message.value = "";
    }
    });
}