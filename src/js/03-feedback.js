import throttle from "lodash.throttle"

const refs = {
    form: document.querySelector(".feedback-form"),
}

const FEEDBACK_DATA= "feedback-form-state"

refs.form.addEventListener("input", throttle(currentActive, 500))
refs.form.addEventListener("click",onCLick)

let data = {}

textContent();

function currentActive(e) {
    if (e.target.value) {
        data[e.target.name] = e.target.value
        localStorage.setItem(FEEDBACK_DATA, JSON.stringify(data))
    }
}

function onCLick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "BUTTON") {
        return
    }
    console.log(dataFromLocalStorage())
    refs.form.message.value = ""
    refs.form.email.value = ""
    localStorage.clear()
}




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