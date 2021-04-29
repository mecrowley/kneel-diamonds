import { getMetals, getOrderBuilder, setMetal } from "./dataAccess.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"
    const newOrder = getOrderBuilder()
    const listItems = metals.map(metal => {
        if (metal.id === newOrder.metalId) {
            return `<li>
            <input type="radio" name="metal" value="${metal.id}" checked="checked" /> ${metal.metal}
        </li>`
        } else {
            return `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
        }
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}

