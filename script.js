// Инпуты
let username=document.querySelector(".username")
let lastname=document.querySelector(".lastname")
let email=document.querySelector(".email")
let password1=document.querySelectorAll(".password")[0]
let password2=document.querySelectorAll(".password")[1]

// Кнопки
let btn=document.querySelector(".btn")

btn.addEventListener("click", comeon)

//Регулярки
let userNameReg = /^[A-Za-zА-Яа-я\- ]*[^0-9][A-Za-zА-Яа-я\- ]*$/;
let userEmailReg= /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
let userPasswordReg= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/

function comeon(event){
    event.preventDefault()
    validate(userNameReg, username)
    validate(userNameReg, lastname)

}
function validate(userReg,userValue){
    
    if(!userReg.test(username.value)){
        userValue.classList.add("error")
    }
}

