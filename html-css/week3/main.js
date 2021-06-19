let currentTab = 0;
showTab(currentTab);
updateShippingAddress();

function showTab(n) {
    const formTab = document.getElementsByClassName("form-tab");
    formTab[n].style.display = "block";

    if (n === 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (formTab.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }

    fixStepIndicator(n);
}

function nextPrev(n) {

    const formTab = document.getElementsByClassName("form-tab");

    if (n == 1 && !validateForm()) return false;

    formTab[currentTab].style.display = "none";
    currentTab = currentTab + n;

    if (currentTab >= formTab.length) {
        document.getElementById("regForm").submit();
        return false;
    }
    showTab(currentTab);
}

function validateForm() {

    let i;
    let valid = true;
    const formTab = document.getElementsByClassName("form-tab");
    const inputs = formTab[currentTab].getElementsByTagName("input");

    for (i = 0; i < inputs.length; i++) {

        if (!inputs[i].validity.valid) {
            inputs[i].classList.add("invalid");
            valid = false;
        } else {
            inputs[i].classList.remove("invalid");
        }
    }

    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finished";
    }
    return valid;

}

function fixStepIndicator(n) {

    const progressStep = document.getElementsByClassName("step");
    const progressTextTab = document.getElementsByClassName("progress-text-tab");
    for (let i = 0; i < progressStep.length; i++) {
        progressStep[i].className = progressStep[i].className.replace(" active", "");
    }

    for (let i = 0; i < progressTextTab.length; i++) {
        progressTextTab[i].className = progressTextTab[i].className.replace(" active", "");
    }

    progressStep[n].className += " active";
    progressTextTab[n].className += " active";
}

function updateShippingAddress() {
    const shippingCheckbox = document.querySelector('#shippingCheckbox');
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const country = document.querySelector('#country');
    const address = document.querySelector('#address');
    const postcode = document.querySelector('#postcode');
    const shipping_firstName = document.querySelector('#shipping_firstName');
    const shipping_lastName = document.querySelector('#shipping_lastName');
    const shipping_country = document.querySelector('#shipping_country');
    const shipping_address = document.querySelector('#shipping_address');
    const shipping_postcode = document.querySelector('#shipping_postcode');

    if (shippingCheckbox.checked) {
        shipping_firstName.value = firstName.value;
        shipping_lastName.value = lastName.value;
        shipping_country.value = country.value;
        shipping_address.value = address.value;
        shipping_postcode.value = postcode.value;
    } else {
        return;
    }

}

const password = document.getElementById("password1")
const confirm_password = document.getElementById("password2");

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

