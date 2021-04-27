import { getSizes } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => { 
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

