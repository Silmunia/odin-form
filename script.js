
let formButton = document.querySelector("button");
let passwordField = document.querySelector("#password");
let passwordConfirmField = document.querySelector("#confirm-password");

let passwordFeedback = document.querySelectorAll(".form-field p");

formButton.addEventListener('click', (event) => {
    if (passwordField.value != ""
        && passwordConfirmField.value != "") {

        if (passwordField.value == passwordConfirmField.value) {

            for (let i = 0; i < passwordFeedback.length; i++) {
                passwordFeedback[i].style.visibility = "hidden";
            }

            passwordField.classList.remove("input-error");
            passwordConfirmField.classList.remove("input-error");
        } else {
            event.preventDefault();
            event.stopPropagation();
            
            for (let i = 0; i < passwordFeedback.length; i++) {
                passwordFeedback[i].style.visibility = "visible";
            }
    
            passwordField.classList.add("input-error");
            passwordConfirmField.classList.add("input-error");
        }

    }
})
