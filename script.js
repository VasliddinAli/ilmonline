let cards = document.querySelectorAll('.select-mode__item');
let in_btn = document.querySelector('#otishBtn');
let basicMenu = document.querySelector('#basicMenu');
let professionalCourse = document.querySelector('#professionalCourse');
let selectMode = document.querySelector('.select-mode');

cards.forEach(card => {
    card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("active")); // Barcha kardlardan aktiv klassni olib tashlaymiz
        card.classList.add("active"); // Bosilgan kartni aktiv holatga o'tkazamiz
        in_btn.removeAttribute("disabled")
        in_btn.classList.remove("disabled");
    });
});
if (in_btn != null) {
    in_btn.addEventListener('click', () => {
        if (professionalCourse.classList.contains('active')) {
            window.location.href = "./views/professionalCourse.html";
        } else {
            basicMenu.style.display = 'block'
            selectMode.style.display = 'none'
        }
    })
}

let lessons_btn = document.querySelector('.lessons_btn');
// let user_cabinet = document.querySelector('.user_cabinet');
let nav_burger__wrapper = document.querySelector('.nav_burger__wrapper');
let mainResMenu = document.querySelector('.mainResMenu');
let mainMenu = document.querySelector('.mainMenu');

lessons_btn.addEventListener('click', () => {
    if (document.querySelector('.lessonsMenu').style.display != 'grid') {
        document.querySelector('.lessonsMenu').style.display = 'grid'
        document.querySelector('.lessons_btn img').style.transform = 'rotate(180deg)'
        mainMenu.style.display = 'none'
        document.querySelector('.header__wrapper').classList.add('active')
        document.querySelector('.header__inner').classList.add('burger_categories')
        // document.querySelector('.user_cabinet').classList.remove('hover')
    } else {
        document.querySelector('.lessonsMenu').style.display = 'none'
        document.querySelector('.lessons_btn img').style.transform = 'rotate(0)'
        document.querySelector('.header__wrapper').classList.remove('active')
        document.querySelector('.header__inner').classList.remove('burger_categories')
    }
})

nav_burger__wrapper.addEventListener('click', () => {
    if (document.querySelector('.mainMenu').style.display != 'grid') {
        document.querySelector('.mainMenu').style.display = 'grid'
        document.querySelector('.lessonsMenu').style.display = 'none'
        // document.querySelector('.user_cabinet').classList.remove('hover')
        document.querySelector('.lessons_btn img').style.transform = 'rotate(0)'
        document.querySelector('.header__wrapper').classList.add('active')
        document.querySelector('.nav_burger').classList.add('active')
        document.querySelector('.header__inner').classList.add('burger_categories')
    } else {
        document.querySelector('.mainMenu').style.display = 'none'
        document.querySelector('.header__wrapper').classList.remove('active')
        document.querySelector('.nav_burger').classList.remove('active')
        document.querySelector('.header__inner').classList.remove('burger_categories')
    }
})

let showResetModal = document.querySelector('.auth_form__forgot_pass');
let hideResetModal = document.querySelector('.modal__container_wrapper-cross');
let resetModal = document.querySelector('#resetModal');

if (showResetModal != null) {
    showResetModal.addEventListener('click', () => {
        resetModal.style.display = 'block'
    })
    hideResetModal.addEventListener('click', () => {
        resetModal.style.display = 'none'
    })
}


// document.querySelector('#sorting_select__course_title').addEventListener('click', () => {
//     document.querySelector('.sorting_select__title').classList.toggle('active');
// })

document.querySelector('.language').addEventListener('click', () => {
    document.querySelector('.language').classList.toggle('active');
})

// user_cabinet.addEventListener('click', () => {
//     document.querySelector('.user_cabinet').classList.toggle('hover')
//     document.querySelector('.header__wrapper').classList.remove('active')
//     document.querySelector('.header__inner').classList.remove('burger_categories')
//     document.querySelector('.mainMenu').style.display = 'none'
//     document.querySelector('.lessonsMenu').style.display = 'none'
// })

window.addEventListener('scroll', function () {
    if (window.scrollY >= 10) {
        document.querySelector('.header').classList.add('shadow')
    } else {
        document.querySelector('.header').classList.remove('shadow')
    }
});

function scrollBottom() {
    let scrollY = window.innerHeight;
    window.scrollTo(0, scrollY);
}

let checkboxes = document.querySelectorAll('.level__checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', (e) => {
        checkbox.classList.toggle('selected')
        var divElement = document.createElement("div");
        var childElements = checkbox.getElementsByClassName("level__checkbox--center");
        if (childElements.length > 0) {
            checkbox.removeChild(checkbox.lastElementChild)
        } else {
            divElement.classList.add("level__checkbox--center");
            checkbox.appendChild(divElement);
        }
    })
});


let polisyTitle = document.querySelectorAll('.agreement_policy__content_content');
let polisyText = document.querySelectorAll('.agreement_policy__content_text');

polisyTitle.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.classList.toggle('opened')

        polisyText.forEach((element, ind) => {
            if (index == ind) {
                let haveElement = window.getComputedStyle(element).display
                if (haveElement === 'none') {
                    element.style.display = 'block';
                } else {
                    element.style.display = 'none';
                }
            }
        })
    })
});


sortTitle = document.querySelector('.sorting_select__title');
if (sortTitle != null) {
    sortTitle.addEventListener('click', () => {
        sortTitle.classList.toggle('hover')
    })
}

let lessonClose = document.querySelector('.current_lesson__note_close')
if (lessonClose != null) {
    lessonClose.addEventListener('click', () => {
        document.querySelector('.current_lesson__note').style.display = 'none'
    })
}

// let lessons_wrapper = document.querySelector('.lessons_wrapper');
// let filter_sidebar_wrapper = document.querySelector('#lessonFilter');
// if(window.innerWidth <= 1040){
//     document.querySelector('.clasFilterBtn').classList.add('primary-btn--orange')
// }


let vacansyFilter = document.querySelector('#vacansyFilterRes');
let filterBtnVacansy = document.querySelector('#vacancyFilterBtn');
let filterCloseBtnVacansy = document.querySelector('#filterCloseBtnVacansy');
if (filterBtnVacansy != null) {
    filterBtnVacansy.addEventListener('click', () => {
        vacansyFilter.style.display = 'block';
        console.log(12);
    })
    filterCloseBtnVacansy.addEventListener('click', () => {
        vacansyFilter.style.display = 'none'
    })
}

let filterCourse = document.querySelector('#lessonFilterRes');
let filterBtn = document.querySelector('.clasFilterBtn');
let filterCloseBtn = document.querySelector('#filterCloseBtn');
if (filterBtn != null) {
    filterBtn.addEventListener('click', () => {
        filterCourse.style.display = 'block'
    })
    filterCloseBtn.addEventListener('click', () => {
        filterCourse.style.display = 'none'
    })
}


let chatMenuBtn = document.querySelector('.menu_btn__wrapper');
if (chatMenuBtn != null) {
    chatMenuBtn.addEventListener('click', () => {
        let element = document.querySelector('.profile_sidebar_wrapper');
        let haveElement = window.getComputedStyle(element).display
        if (haveElement === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    })
}


let chatDialogWrapper = document.querySelector('.chat_dialog__wrapper');
let chatUsersMain = document.querySelector('.chat_users__main');
let chatDialogBackBtn = document.querySelector('.chat_dialog__back_btn');
if (chatUsersMain != null) {
    chatUsersMain.addEventListener('click', () => {
        chatDialogWrapper.classList.add('active')
    })
    chatDialogBackBtn.addEventListener('click', () => {
        chatDialogWrapper.classList.remove('active')
    })
}

let registerBtn = document.querySelector('#registerBtn');
let confirmationNumber = document.querySelector('#confirmation-number');
let registerModal = document.querySelector('.registerModal');

if (registerBtn != null) {
    registerBtn.addEventListener('click', () => {
        registerModal.style.display = 'block'
        confirmationNumber.addEventListener('input', () => {
            if (confirmationNumber.value.length == 5) {
                registerBtn.removeAttribute('disabled')
            } else {
                registerBtn.setAttribute('disabled', "")
            }
        })

        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                // minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = seconds;

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }
        var fiveMinutes = 60 * 5,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    })
}

