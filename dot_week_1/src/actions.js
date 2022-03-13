import { ADD_ALL, ADD_PRODUCT, DECREASE_PRODUCT, INCREASE_PRODUCT, REMOVE_ALL, REMOVE_PRODUCT } from "./actionType"
export function addProdcut(des) { 
    return {
        type: ADD_PRODUCT,
        payload: {
            id: des
        }
    }
}
export function removeProduct(des) { 
    return {
        type: REMOVE_PRODUCT,
        payload: {
            id: des
        }
    }
}

export function increaseProduct(des) { 
    return {
        type: INCREASE_PRODUCT,
        payload: {
            id: des
        }
    }
}

export function decreaseProduct(des) { 
    return {
        type: DECREASE_PRODUCT,
        payload: {
            id: des
        }
    }
}
export function removeAll(des) {
     
    return {
        type: REMOVE_ALL,
        payload: {
            id: des
        }
    }
}
export function addData() {
     
    return {
        type: ADD_ALL,
    }
}





