import { FC, createContext, useReducer, useContext } from 'react'
import State, { initialState } from './state'
import update from './update'
import Product from '../product'

type GlobalContextType = {
    state: State,
    addProductToCart: (product: Product) => void,
}

const warnNoProviderSet = (x: any) => console.warn('No provider set')

const GlobalContext = createContext<GlobalContextType>({
    state: initialState,
    addProductToCart: () => warnNoProviderSet(''),
})

export const useGlobal = () => useContext(GlobalContext)

const Provider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(update, initialState)

    const addProductToCart = (product: Product) =>
        dispatch({
            kind: 'ADD_PRODUCT_TO_CART',
            data: product,
        })

    const removeProductFromCart = (id: string) =>
        dispatch({
            kind: 'REMOVE_PRODUCT_FROM_CART',
            data: id,
        })

    const value = {
        state,
        addProductToCart,
        removeProductFromCart,
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default Provider