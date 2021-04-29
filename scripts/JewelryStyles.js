import { getOrderBuilder, getStyles, setStyle } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"
    const newOrder = getOrderBuilder()
    const listItems = styles.map(style => {
        if (style.id === newOrder.styleId) {
            return `<li>
        <input type="radio" name="style" value="${style.id}" checked="checked"/> ${style.style}
    </li>`
        } else {
            return `<li>
        <input type="radio" name="style" value="${style.id}" /> ${style.style}
    </li>`
        }
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}

