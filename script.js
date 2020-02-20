var id = 113;
var name;
name = "Ned";

var myVar = "global";

function sample() {
	var myVar = "local";
}

switch(x) {
	case 1: document.write();
	case 2: 
}

//=========================================================================================
// Sign Up Logic
//=========================================================================================

function onSignupSubmitClick() {
	var signUpForms = document.getElementById("signUpForms");

	if (!formsAreComplete()) {
        alert("Required fields!");
        return;
	}
	
	if (!passwordIsValid()) {
		alert("Password should contain at least 8 characters, 1 number, and 1 lowercase and uppercase letter.")
		return;
	}

    if (!passwordsMatch()) {
        alert("Passwords do not match!");
        return;
    }

    if(!emailIsCorrect()) {
        alert("Invalid email!");
        return;
	}
	
    signUpForms.submit();
}

function emailIsCorrect(){
    var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailForm = document.getElementById("emailAddress");

    if (!regExp.test(emailForm.value)) {
        emailForm.style.backgroundColor = "pink";
        return false;
    }

    return true;
}

function passwordIsValid() {
	var regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
	var passwordForm = document.getElementById("password");

	if (!regExp.test(passwordForm.value)) {
        passwordForm.style.backgroundColor = "pink";
        return false;
    }

    return true;

}

function passwordsMatch() {
    var passwordForm = document.getElementById("password");
    var confirmPasswordForm = document.getElementById("confirmPassword");

    if (passwordForm.value != confirmPasswordForm.value) {
        passwordForm.style.backgroundColor = "pink";
        confirmPasswordForm.style.backgroundColor = "pink";
        return false;
    }

    return true;
}

function formsAreComplete() {
    var isComplete = true;

	var userNameForm = document.getElementById("userName");
	var emailAddressForm = document.getElementById("emailAddress");
	var passwordForm = document.getElementById("password");
	var confirmPasswordForm = document.getElementById("confirmPassword");

    userNameForm.style.backgroundColor = "white";
    emailAddressForm.style.backgroundColor = "white";
    passwordForm.style.backgroundColor = "white";
    confirmPasswordForm.style.backgroundColor = "white";

    if (userNameForm.value == "") {
        isComplete = false;
        userNameForm.style.backgroundColor = "pink";
    }

    if(emailAddressForm.value == "") {
        isComplete = false;
        emailAddressForm.style.backgroundColor = "pink";
    }

    if(passwordForm.value == "") {
        isComplete = false;
        passwordForm.style.backgroundColor = "pink";
    }

    if(confirmPasswordForm.value == "") {
        isComplete = false;
        confirmPasswordForm.style.backgroundColor = "pink";
    }

    return isComplete;
}
