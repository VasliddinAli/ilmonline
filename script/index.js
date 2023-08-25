document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
    } else if (event.ctrlKey && event.key === 'a') {
        event.preventDefault();
    }
});
document.addEventListener('contextmenu', function (event) {
    event.preventDefault(); // Maqsad menyusini to'xtatish
});


const cards = document.querySelectorAll('.home-card-direction-cards');
const in_btn = document.querySelector('.home-card-button button');

cards.forEach(card => {
    card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("active")); // Barcha kardlardan aktiv klassni olib tashlaymiz
        card.classList.add("active"); // Bosilgan kartni aktiv holatga o'tkazamiz
        in_btn.removeAttribute("disabled")
        in_btn.classList.remove("disabled");
    });
});
