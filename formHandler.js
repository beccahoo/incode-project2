//DOM elements
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const form = document.querySelector("#contact")

//REGEX
const validEmail = /^[A-Za-z0-9\._\-]+@[A-Za-z]+[A-Za-z0-9\-]+[A-Za-z]+(\.[A-Za-z0-9\-]+)+$/
const validName = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/

form.setAttribute("novalidate", true)
form.onsubmit = submitForm

function submitForm(event) {
    event.preventDefault()
    


    //if all inputs pass regex test, then print to console or load modal/popup
    //let test = validName.test (name.Value)
    //console.log(test)
    //inputValid(validName, name)
    //inputValid(validEmail, email)

    if (inputValid(validName, name) && inputValid(validEmail, email)) {
        console.log(`Name: ${name.value}\nEmail: ${email.value}`)
    }   else{
        console.log ('Inputs are incorrect. Please try again')
    }

}

function inputValid(regex, input) {
    return regex.test(input.value)
}