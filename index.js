let globalIsSubmitted = false

function validate(isSubmitted = false) {
    let firstname = document.getElementById('first-name').value
    let lastname = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let phoneNumber = document.getElementById('phone-number').value
    let male = document.getElementById('male')
    let female = document.getElementById('female')
    let other = document.getElementById('other')
    let country = document.getElementById('country').value
    let error = false

    if (isSubmitted) {
        ``
        globalIsSubmitted = true
    }
    if (globalIsSubmitted) {
        if (firstname.length >= 3 && firstname.match(/^[A-Za-z]+$/)) {
            /*console.log("correct first name")*/
            document.getElementById('first-name-valid').style.display = 'block'
            document.getElementById('first-name-invalid').style.display = 'none'
        }
        else {
            /*        console.log("incorrect first name")*/
            document.getElementById('first-name-invalid').style.display = 'block'
            document.getElementById('first-name-valid').style.display = 'none'
            error = true

        }
        if (lastname.length >= 3 && lastname.match(/^[A-Za-z]+$/)) {
            /*console.log("correct first name")*/
            document.getElementById('last-name-valid').style.display = 'block'
            document.getElementById('last-name-invalid').style.display = 'none'
        }
        else {
            /*        console.log("incorrect first name")*/
            document.getElementById('last-name-invalid').style.display = 'block'
            document.getElementById('last-name-valid').style.display = 'none'
            error = true

        }
        if (
            email.includes("@") &&
            email.includes(".") &&
            email.indexOf("@") != 0 &&
            email.length - email.lastIndexOf(".") >= 3
        ) {
            document.getElementById("email-valid").style.display = "block";
            document.getElementById("email-invalid").style.display = "none";
        } else {
            document.getElementById("email-invalid").style.display = "block";
            document.getElementById("email-valid").style.display = "none";
            error = true
        }
        if (phoneNumber.match(/^\d{10}$/) && phoneNumber.indexOf('0') != 0 &&
            phoneNumber.indexOf('1') != 0 && phoneNumber.indexOf('2') != 0 && phoneNumber.indexOf('3') != 0 && phoneNumber.indexOf('4') != 0 && phoneNumber.indexOf('5') != 0) {
            document.getElementById('phone-valid').style.display = 'block'
            document.getElementById('phone-invalid').style.display = 'none'
        }
        else {
            document.getElementById('phone-invalid').style.display = 'block'
            document.getElementById('phone-valid').style.display = 'none'
            error = true
        }
        if (!male.checked && !female.checked && !other.checked) {
            
            document.getElementById('gender-invalid').style.display = 'block'
            document.getElementById('gender-valid').style.display = 'none'
/*            document.getElementById('gender-valid').style.display = 'block'
            document.getElementById('gender-invalid').style.display = 'none'
        */
             } 
        else if (!male.checked && !female.checked) {
       /*
            document.getElementById('gender-invalid').style.display = 'block'
            document.getElementById('gender-valid').style.display = 'none'*/
            document.getElementById('gender-valid').style.display = 'block'
            document.getElementById('gender-invalid').style.display = 'none'
        }
        else {
            document.getElementById('gender-valid').style.display = 'block'
            document.getElementById('gender-invalid').style.display = 'none'
        }

        if (country != ' ') {
            document.getElementById('country-valid').style.display = 'block'
            document.getElementById('country-invalid').style.display = 'none'
        } else {
            document.getElementById('country-invalid').style.display = 'block'
            document.getElementById('country-valid').style.display = 'none'
        }
    }
    if (!error && isSubmitted) {
        alert('Your details have been saved successfully!')
        document.getElementById('registration-form').reset()

        let validFeedbacks = document.getElementsByClassName('valid-feedback')
        for (let i = 0; i < validFeedbacks.length; i++) {
            validFeedbacks[i].style.display = 'none'
        }
        let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
        for (let i = 0; i < invalidFeedbacks.length; i++) {
            invalidFeedbacks[i].style.display = 'none'
        }
    }

}