import throttle from "lodash.throttle"

const refs = {
    form: document.querySelector(".feedback-form"),
}

const FEEDBACK_DATA= "feedback-form-state"

refs.form.addEventListener("input", throttle(currentActive, 500))
refs.form.addEventListener("submit",onCLick)
let data = {}

if (dataFromLocalStorage()) {
    data={...dataFromLocalStorage()}
}


function currentActive(e) {
    if (e.target.value) {
        data[e.target.name] = e.target.value
        localStorage.setItem(FEEDBACK_DATA, JSON.stringify(data))
    }
}

function onCLick(e) {
    e.preventDefault();
   if(refs.form.message.value&&refs.form.email.value)
    {
    console.log(dataFromLocalStorage())
    refs.form.message.value = ""
    refs.form.email.value = ""
        localStorage.clear()
   } else {
       alert("Please fill all fields")
    }
    
}

textContent();



function textContent() {
    if (localStorage.getItem(FEEDBACK_DATA)) {
        let dataInStorage = dataFromLocalStorage()
        refs.form.message.value = dataInStorage.message
        refs.form.email.value = dataInStorage.email
    }
    
}

function dataFromLocalStorage() {
    return JSON.parse(localStorage.getItem(FEEDBACK_DATA))
}


