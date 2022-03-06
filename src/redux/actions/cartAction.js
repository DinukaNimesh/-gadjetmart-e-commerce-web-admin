import { addToCartActionType, resetActionTypes } from "../actionType/actionType";

export const addToCartAction = (data) => {
    return {
        type: addToCartActionType.ADD_TO_CART,
        value: data
    }
}

export const resetCartAction = () => {
    return {
        type: resetActionTypes.CART_RESET_ACTION,
    }
}
