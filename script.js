// Инпуты
let username=document.querySelector(".username")
let lastname=document.querySelector(".lastname")
let email=document.querySelector(".email")
let password1=document.querySelectorAll(".password")[0]
let password2=document.querySelectorAll(".password")[1]
let number=document.querySelector(".number")

// Кнопки
let btn=document.querySelector(".btn")

btn.addEventListener("click", clickMe)

//Регулярки
let userNameReg = /^[A-Za-zА-Яа-я\- ]*[^0-9][A-Za-zА-Яа-я\- ]*$/;
let userEmailReg = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
let userPasswordReg= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/

function clickMe(event){
    event.preventDefault()
    validate(userNameReg, username)
    validate(userNameReg, lastname)
    validate(userEmailReg, email)
    validate(userPasswordReg, password1)
    validate(userPasswordReg, password2)
   
}

function validate(userReg, userValue){

    if(!userReg.test(userValue.value)){
        userValue.classList.add("error")
    }else{
        if(userReg.test(userValue.value)){
        userValue.classList.remove("error")
        }
    }
}
