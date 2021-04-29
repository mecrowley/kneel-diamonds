import { getOrderBuilder, getSizes, setSize } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"
    const newOrder = getOrderBuilder()
    const listItems = sizes.map(size => {
        if (size.id === newOrder.sizeId) {
            return `<li>
            <input type="radio" name="size" value="${size.id}" checked="checked"/> ${size.carets}
        </li>`
        } else {
            return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
        }
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

