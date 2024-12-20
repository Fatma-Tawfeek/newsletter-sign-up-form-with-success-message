const formCard = document.getElementById("form-card");
const form = document.getElementById("form");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const successMsgCard = document.getElementById("success-msg-card");
const emailMsg = document.getElementById("email-msg");
const closeBtn = document.getElementById("close-btn");

function validateEmail(input) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(input.value);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateEmail(email)) {
        formCard.style.display = "none";
        successMsgCard.style.display = "block";
        emailMsg.innerText = email.value;
        email.value = "";
        errorMsg.style.display = "none";
        email.classList.remove("invalid");
    } else {
        email.classList.add("invalid");
        errorMsg.style.display = "block";
    }
});

closeBtn.addEventListener("click", function () {
    formCard.style.display = "block";
    successMsgCard.style.display = "none";
});
