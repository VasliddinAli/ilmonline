let schoolEducation = document.querySelector(".schoolEducation"), professionalEducation = document.querySelector(".professionalEducation"), selectedDirection = document.querySelector("#selectedDirection");
let schoolEducation2 = document.querySelector(".schoolEducation2"), professionalEducation2 = document.querySelector(".professionalEducation2"), selectedDirection2 = document.querySelector("#selectedDirection2");
let schoolEducation3 = document.querySelector(".schoolEducation3"), professionalEducation3 = document.querySelector(".professionalEducation3"), selectedDirection3 = document.querySelector("#selectedDirection3");
let schoolDirectionUzb = document.querySelector(".schoolDirectionUzb")


function schoolOrProfessional(){
    schoolEducation2.addEventListener('click', function(){
        schoolEducation2.style.border = "1px solid #ec5239"
        professionalEducation2.style.border = "1px solid #c6ced1"
        selectedDirection2.style.opacity = "1"
        
        if(selectedDirection2.style.opacity === "1"){
            selectedDirection2.addEventListener('mousemove', function(){
                selectedDirection2.style.transform = "translate(10px, -10px)"
            })

            selectedDirection2.addEventListener('mouseout', function(){
                selectedDirection2.style.transform = "translate(0, 0)"
            })
        }
    })

    professionalEducation2.addEventListener('click', function(){
        professionalEducation2.style.border = "1px solid #055dff"
        schoolEducation2.style.border = "1px solid #c6ced1"
        selectedDirection2.style.opacity = "1"

        if(selectedDirection2.style.opacity === "1"){
            selectedDirection2.addEventListener('mousemove', function(){
                selectedDirection2.style.transform = "translate(10px, -10px)"
            })

            selectedDirection2.addEventListener('mouseout', function(){
                selectedDirection2.style.transform = "translate(0, 0)"
            })
        }
    })
} schoolOrProfessional()

    /* -------------------------------------------------------------------------------- NEXT STEP -------------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------------- NEXT STEP -------------------------------------------------------------------------------- */

selectedDirection2.addEventListener('click', function(){
    schoolDirectionUzb.style.display = "block"
    document.querySelector(".rus, .uzb, .kirel").style.display = "none"
})  