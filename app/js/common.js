$(function () {

    // Custom JS
    var menu = document.querySelector(".navigation-wrapper")
    var dropdownbButton = document.querySelector(".dropdown-button")
    dropdownbButton.addEventListener("click", function () {
        menu.classList.toggle("navigation-wrapper-hidden");
    })


});
