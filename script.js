let lessons_btn = document.querySelector('.lessons_btn');
let user_cabinet = document.querySelector('.user_cabinet');
let nav_burger__wrapper = document.querySelector('.nav_burger__wrapper');
let mainResMenu = document.querySelector('.mainResMenu');
let mainMenu = document.querySelector('.mainMenu');

lessons_btn.addEventListener('click', () => {
    if (document.querySelector('.lessonsMenu').style.display != 'grid') {
        document.querySelector('.lessonsMenu').style.display = 'grid'
        document.querySelector('.lessons_btn img').style.transform = 'rotate(180deg)'
        document.querySelector('.mainMenu').style.display = 'none'
        document.querySelector('.header__wrapper').classList.add('active')
        document.querySelector('.header__inner').classList.add('burger_categories')
        document.querySelector('.user_cabinet').classList.remove('hover')
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
        document.querySelector('.user_cabinet').classList.remove('hover')
        document.querySelector('.lessons_btn img').style.transform = 'rotate(0)'
        document.querySelector('.header__wrapper').classList.add('active')
        document.querySelector('.header__inner').classList.add('burger_categories')
    } else {
        document.querySelector('.mainMenu').style.display = 'none'
        document.querySelector('.header__wrapper').classList.remove('active')
        document.querySelector('.header__inner').classList.remove('burger_categories')
    }
})

// document.querySelector('#sorting_select__course_title').addEventListener('click', () => {
//     document.querySelector('.sorting_select__title').classList.toggle('active');
// })

document.querySelector('.language').addEventListener('click', () => {
    document.querySelector('.language').classList.toggle('active');
})

user_cabinet.addEventListener('click', () => {
    document.querySelector('.user_cabinet').classList.toggle('hover')
    document.querySelector('.header__wrapper').classList.remove('active')
    document.querySelector('.header__inner').classList.remove('burger_categories')
    document.querySelector('.mainMenu').style.display = 'none'
    document.querySelector('.lessonsMenu').style.display = 'none'
})

window.addEventListener('scroll', function () {
    if (window.scrollY >= 10) {
        document.querySelector('.header').classList.add('shadow')
    } else {
        document.querySelector('.header').classList.remove('shadow')
    }
});

function scrollBottom() {
    const scrollY = window.innerHeight;
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