import { database } from "./database.js";

export const getMetals = () => {
    return [...database.metals]
}

export const getSizes = () => {
    return [...database.sizes]
}

export const getStyles = () => {
    return [...database.styles]
}

export const getForms = () => {
    return [...database.forms]
}

export const getOrders = () => {
    return [...database.customOrders]
}

export const getOrderBuilder = () => {
    return { ...database.orderBuilder }
}

export const setMetal = (id) => {
    database.orderBuilder.metalId = id

}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}

export const setForm = (id) => {
    database.orderBuilder.formId = id
}

export const addCustomOrder = () => {
    if ("metalId" in database.orderBuilder &&
        "sizeId" in database.orderBuilder &&
        "styleId" in database.orderBuilder &&
        "formId" in database.orderBuilder) {

        const newOrder = { ...database.orderBuilder }
        newOrder.id = (database.customOrders.length > 0 ? [...database.customOrders].pop().id + 1 : 1)
        newOrder.timestamp = Date.now()
        database.customOrders.push(newOrder)
        database.orderBuilder = {}
        document.dispatchEvent(new CustomEvent("stateChanged"))
        return true
    }
    return false
}