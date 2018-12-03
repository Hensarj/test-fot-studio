$(function () {

    // Custom JS
    var menu = document.querySelector(".navigation-wrapper");
    var dropdownbButton = document.querySelector(".dropdown-button");
    dropdownbButton.addEventListener("click", function () {
        menu.classList.toggle("navigation-wrapper-hidden");
    })
    var form = document.querySelector(".payment-info__card");
    console.log(form.elements.cardCodeNumber);
    form.elements.numberBlock1.addEventListener("keypress", function (e) {
        if (!checkInput(e, "number")) {
            e.preventDefault();
        }
    })
    form.elements.numberBlock2.addEventListener("keypress", function (e) {
        if (!checkInput(e, "number")) {
            e.preventDefault();
        }
    })
    form.elements.numberBlock3.addEventListener("keypress", function (e) {
        if (!checkInput(e, "number")) {
            e.preventDefault();
        }
    })
    form.elements.numberBlock4.addEventListener("keypress", function (e) {
        if (!checkInput(e, "number")) {
            e.preventDefault();
        }
    })
    form.elements.verificationCodeValue.addEventListener("keypress", function (e) {
        if (!checkInput(e, "number")) {
            e.preventDefault();
        }
    })
    form.elements.cardHolder.addEventListener("keypress", function (e) {
        if (!checkInput(e, "name")) {
            e.preventDefault();
        }
    })

    function checkInput(ew, compare) {
        var ew = event.which;
        if (compare == "number")
            if (48 <= ew && ew <= 57)
                return true;
        if (compare == "name")
            if ((65 <= ew && ew <= 90) || (97 <= ew && ew <= 122) || (ew == 32))
                return true;
        return false;
    }


})
;
