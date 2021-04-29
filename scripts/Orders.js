import { getForms, getMetals, getOrders, getSizes, getStyles } from "./dataAccess.js"

const buildOrderListItem = (order) => {
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()
    const forms = getForms()

    const foundMetal = metals.find(metal => metal.id === order.metalId)
    const foundSize = sizes.find(size => size.id === order.sizeId)
    const foundStyle = styles.find(style => style.id === order.styleId)
    const foundForm = forms.find(form => form.id === order.formId)

    let totalCost;

    if (foundForm === undefined) {
        totalCost = foundMetal.price + foundSize.price + foundStyle.price
    } else {
        totalCost = (foundMetal.price + foundSize.price + foundStyle.price) * foundForm.priceIncreaseFactor
    }

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    Order #${order.id} cost ${costString}
</li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
