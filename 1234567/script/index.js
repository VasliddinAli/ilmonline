document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
    } else if (event.ctrlKey && event.key === 'a') {
        event.preventDefault();
    }
});
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});


const cards = document.querySelectorAll('.home-card-direction-cards');
const in_btn = document.querySelector('.home-card-button button');

cards.forEach(card => {
    card.addEventListener("click", (e) => {
        cards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");

        in_btn.removeAttribute("disabled")
        in_btn.classList.remove("disabled");
        in_btn.classList.add("active");
    });
});


// dropdown lang
const dropdownButton = document.querySelector(".dropbtn");
const dropdownContent = document.getElementById("languageDropdown");

dropdownButton.addEventListener("click", function () {
    dropdownContent.classList.toggle("show");
});

dropdownContent.addEventListener("click", function (event) {
    const selectedLanguage = event.target.getAttribute("data-lang");
    dropdownContent.classList.remove("show");
});


window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropbtn")) {
        dropdownContent.classList.remove("show");
    }
});