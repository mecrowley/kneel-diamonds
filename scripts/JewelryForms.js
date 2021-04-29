import { getForms, getOrderBuilder, setForm } from "./database.js"

const forms = getForms()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "form") {
            setForm(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const JewelryForms = () => {
    const newOrder = getOrderBuilder()
    const formOptions = forms.map(form => {
        if (form.id === newOrder.formId) {
            return `<div class="form__option">
        <input type="radio" name="form" value="${form.id}" checked="checked" />${form.form}
        </div>`
        } else {
            return `<div class="form__option">
        <input type="radio" name="form" value="${form.id}" />${form.form}
        </div>`
        }
    })
    let html = formOptions.join("")
    return html
}