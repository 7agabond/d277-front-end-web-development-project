function validateForm() {
    let x = document.forms["myForm"]["emailVerif"].value;
    if (x !== document.forms["myForm"]["emailOrig"].value) {
        alert("Emails don't match");
        return false;
    }
}