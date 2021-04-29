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
    return {...database.orderBuilder}
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
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    newOrder.id = [...database.customOrders].pop().id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}