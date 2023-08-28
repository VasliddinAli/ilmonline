let schoolEducation = document.querySelector(".schoolEducation"),
    professionalEducation = document.querySelector(".professionalEducation"),
    selectedDirection = document.querySelector("#selectedDirection");
let schoolEducation2 = document.querySelector(".schoolEducation2"),
    professionalEducation2 = document.querySelector(".professionalEducation2"),
    selectedDirection2 = document.querySelector("#selectedDirection2");
let schoolEducation3 = document.querySelector(".schoolEducation3"),
    professionalEducation3 = document.querySelector(".professionalEducation3"),
    selectedDirection3 = document.querySelector("#selectedDirection3");
let schoolDirectionUzb = document.querySelector(".schoolDirectionUzb")


function schoolOrProfessional() {
    schoolEducation.addEventListener('click', function () {
        schoolEducation.style.border = "1px solid #ec5239"
        professionalEducation.style.border = "1px solid #c6ced1"
        selectedDirection.style.opacity = "1"

        if (selectedDirection.style.opacity === "1") {
            selectedDirection.addEventListener('mousemove', function () {
                selectedDirection.style.transform = "translate(10px, -10px)"
            })

            selectedDirection.addEventListener('mouseout', function () {
                selectedDirection.style.transform = "translate(0, 0)"
            })
        }
    })

    professionalEducation.addEventListener('click', function () {
        professionalEducation.style.border = "1px solid #055dff"
        schoolEducation.style.border = "1px solid #c6ced1"
        selectedDirection.style.opacity = "1"
        if (selectedDirection.style.opacity === "1") {
            selectedDirection.addEventListener('mousemove', function () {
                selectedDirection.style.transform = "translate(10px, -10px)"
            })

            selectedDirection.addEventListener('mouseout', function () {
                selectedDirection.style.transform = "translate(0, 0)"
            })
        }
    })

    schoolEducation2.addEventListener('click', function () {
        schoolEducation2.style.border = "1px solid #ec5239"
        professionalEducation2.style.border = "1px solid #c6ced1"
        selectedDirection2.style.opacity = "1"

        if (selectedDirection2.style.opacity === "1") {
            selectedDirection2.addEventListener('mousemove', function () {
                selectedDirection2.style.transform = "translate(10px, -10px)"
            })

            selectedDirection2.addEventListener('mouseout', function () {
                selectedDirection2.style.transform = "translate(0, 0)"
            })
        }
    })

    professionalEducation2.addEventListener('click', function () {
        professionalEducation2.style.border = "1px solid #055dff"
        schoolEducation2.style.border = "1px solid #c6ced1"
        selectedDirection2.style.opacity = "1"

        if (selectedDirection2.style.opacity === "1") {
            selectedDirection2.addEventListener('mousemove', function () {
                selectedDirection2.style.transform = "translate(10px, -10px)"
            })

            selectedDirection2.addEventListener('mouseout', function () {
                selectedDirection2.style.transform = "translate(0, 0)"
            })
        }
    })

    schoolEducation3.addEventListener('click', function () {
        schoolEducation3.style.border = "1px solid #ec5239"
        professionalEducation3.style.border = "1px solid #c6ced1"
        selectedDirection3.style.opacity = "1"

        if (selectedDirection3.style.opacity === "1") {
            selectedDirection3.addEventListener('mousemove', function () {
                selectedDirection3.style.transform = "translate(10px, -10px)"
            })

            selectedDirection3.addEventListener('mouseout', function () {
                selectedDirection3.style.transform = "translate(0, 0)"
            })
        }
    })

    professionalEducation3.addEventListener('click', function () {
        professionalEducation3.style.border = "1px solid #055dff"
        schoolEducation3.style.border = "1px solid #c6ced1"
        selectedDirection3.style.opacity = "1"
        if (selectedDirection3.style.opacity === "1") {
            selectedDirection3.addEventListener('mousemove', function () {
                selectedDirection3.style.transform = "translate(10px, -10px)"
            })
            selectedDirection3.addEventListener('mouseout', function () {
                selectedDirection3.style.transform = "translate(0, 0)"
            })
        }
    })

} schoolOrProfessional()

/* -------------------------------------------------------------------------------- NEXT STEP -------------------------------------------------------------------------------- */

function ruSection() {
    document.querySelector(".rus").style.display = "grid"
    document.querySelector(".uzb").style.display = "none"
    document.querySelector(".kirel").style.display = "none"
    document.getElementById("ruLi").style.opacity = "0.4"
    document.getElementById("uzLi").style.opacity = "1"
    document.getElementById("kirelLi").style.opacity = "1"
}

function uzbSection() {
    document.querySelector(".rus").style.display = "none"
    document.querySelector(".uzb").style.display = "grid"
    document.querySelector(".kirel").style.display = "none"
    document.getElementById("ruLi").style.opacity = "1"
    document.getElementById("uzLi").style.opacity = "0.4"
    document.getElementById("kirelLi").style.opacity = "1"
}

function kirelSection() {
    document.querySelector(".rus").style.display = "none"
    document.querySelector(".uzb").style.display = "none"
    document.querySelector(".kirel").style.display = "grid"
    document.getElementById("ruLi").style.opacity = "1"
    document.getElementById("uzLi").style.opacity = "1"
    document.getElementById("kirelLi").style.opacity = "0.4"
}

/* -------------------------------------------------------------------------------- NEXT STEP -------------------------------------------------------------------------------- */

selectedDirection2.addEventListener('click', function () {
    schoolDirectionUzb.style.display = "block"
    document.querySelector(".rus, .uzb, .kirel").style.display = "none"
})