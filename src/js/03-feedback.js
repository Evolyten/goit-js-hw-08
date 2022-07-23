import throttle from "lodash.throttle"

const refs = {
    form: document.querySelector(".feedback-form"),
}

const FEEDBACK_DATA= "feedback-form-state"
const data = {}
refs.form.addEventListener("input", throttle(currentActive, 500))
refs.form.addEventListener("click",onCLick)

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
    console.log(data)
    refs.form.message.value = ""
    refs.form.email.value = ""
    localStorage.clear()
}




function textContent() {
    if (localStorage.getItem(FEEDBACK_DATA)) {
    let danaInStorage = JSON.parse(localStorage.getItem(FEEDBACK_DATA))
        refs.form.message.value = danaInStorage.message
        refs.form.email.value = danaInStorage.email
    }
    
}