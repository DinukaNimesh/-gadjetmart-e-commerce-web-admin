import {addToCartActionType, resetActionTypes} from "../actionType/actionType";


const initialState = {
    cart: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        // item add to cart
        case addToCartActionType.ADD_TO_CART:
            return {
                ...state,
                cart: action.value,

            };


        // Reset Action Types
        case resetActionTypes.CART_RESET_ACTION:
            return {
                ...state,
                cart: null,
            };

        default:
            return state
    }
}

export default cartReducer;
