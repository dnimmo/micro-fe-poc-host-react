import Product from './product'

interface Cart {
    [id: string]: Product,
}

export default Cart