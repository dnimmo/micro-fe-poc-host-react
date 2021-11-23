import Cart from '../cart'

interface ViewingProductPage {
    kind: "VIEWING_PRODUCT_PAGE",
    cart: Cart,
}

type State = ViewingProductPage

export const initialState: State = {
    kind: "VIEWING_PRODUCT_PAGE",
    cart: {},
}

export default State