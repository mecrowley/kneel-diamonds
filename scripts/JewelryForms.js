import { getForms, setForm } from "./database.js"

const forms = getForms()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "form") {
            setForm(parseInt(event.target.value))
        }
    }
)

export const JewelryForms = () => {
    const formOptions = forms.map(form => {
        return `<div class="form__option">
        <input type="radio" name="form" value="${form.id}" />${form.form}
        </div>`
    })
    let html = formOptions.join("")
    return html
}