//DOM elements
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const form = document.querySelector("#contact")
const telephone = document.querySelector("#telephone")
const message = document.querySelector("#message")

//REGEX
const validEmail = /^[A-Za-z0-9\._\-]+@[A-Za-z]+[A-Za-z0-9\-]+[A-Za-z]+(\.[A-Za-z0-9\-]+)+$/
const validName = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/
const validTelephone = /^((\+61\s?)?(\((0|02|03|04|07|08)\))?)?\s?\d{1,4}\s?\d{1,4}\s?\d{0,4}$/
/*const validMessage = */


form.setAttribute("novalidate", true)
form.onsubmit = submitForm

function submitForm(event) {
    event.preventDefault()
    
    //if all inputs pass regex test, then print to console or load modal/popup
    //let test = validName.test (name.Value)
    //console.log(test)
    //inputValid(validName, name)
    //inputValid(validEmail, email)

    if (inputValid(validName, name) && inputValid(validEmail, email) && inputValid(validTelephone, telephone)) {
        console.log(`Name: ${name.value}\nEmail: ${email.value}\nTelephone: ${telephone.value}`)
        modal_container.classList.add(`show`);        
    }   else{
        console.log ('Inputs are incorrect. Please try again')
    }
}

function inputValid(regex, input) {
    return regex.test(input.value)
}

const open = document.getElementById('open')
const modal_container = document.getElementById ('modal_container')
const close = document.getElementById('close')


/*open.addEventListener(`click`,() =>{
    modal_container.classList.add(`show`);
});*/
close.addEventListener(`click`,() =>{
    modal_container.classList.remove(`show`);
});