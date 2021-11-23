import { Guid } from 'guid-typescript'
import State from './state'
import Product from '../product'

interface AddProductToCart {
    kind: 'ADD_PRODUCT_TO_CART'
    data: Product,
}

interface RemoveProductFromCart {
    kind: 'REMOVE_PRODUCT_FROM_CART'
    data: string,
}

type Action =
    | AddProductToCart
    | RemoveProductFromCart

function update(state: State, action: Action): State {
    switch (action.kind) {
        case 'ADD_PRODUCT_TO_CART':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [Guid.create().toString()]: action.data
                }
            }

        case 'REMOVE_PRODUCT_FROM_CART':
            const {
                cart
            } = state

            const {
                [action.data]: itemToRemove,
                ...remainingCartItems
            } = cart


            return {
                ...state,
                cart: remainingCartItems,
            }
    }
}

export default update