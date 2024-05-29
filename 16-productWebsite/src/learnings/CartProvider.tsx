// in this folder, we define for items in the shopping cart, their export props and methods (include add, remove, updateamount, and update the total amount and update the total pay). note: we should split the product vs the cartitem because they don't have the same prop

import { useReducer, ReactElement, useMemo, createContext, useContext } from "react"

export type CartItemType = {
    sku: string,
    name: string,
    price: number,
    qty: number
}

type CartStateType = {
    cart: CartItemType[]
}

const initCartState: CartStateType = {cart: []}

// here, we use the `useReducer` hook


// notice the enum is to define which action you will get. or just define /list the method like this, if you don't want to use enum 
const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT"
}

// here, you just define the type of the REDUCER_ACTION_TYPE
export type ReducerActionType = typeof REDUCER_ACTION_TYPE

// used as parameters in the reducer. type to be specified which action to be taken
export type ReducerAction = {
    type: string,
    payload?: CartItemType,
} 

// reducer has two params, the first one is initState or the state of cart, which will only contains the state props of var, (excluding any actions or methods)
//the second params include or enum all the actions could be done on the state var sets
const reducer = ( state: CartStateType, action: ReducerAction): CartStateType => {
    switch (action.type){
        case REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) {
                throw new Error("action.payload missing in add action")
            }
            // filter out the target item 
            const {sku, name, price} = action.payload
            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)
            // check if item already in the cart using the find method
            const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)
            // this logic is that if the item already in the cart, then just add 1 to it. or else if it is not in the cart, just make its quantity to be the 1
            const qty: number = itemExists ? itemExists.qty + 1 : 1
            return {...state, cart: [...filteredCart, {sku, name, price, qty}]}
        }
        case REDUCER_ACTION_TYPE.REMOVE: {
            if (!action.payload) {
                throw new Error("action.payload missing in remove action")
            }
            const {sku} = action.payload
            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)
            return {...state, cart: filteredCart}
        }
        case REDUCER_ACTION_TYPE.QUANTITY: {
            if (!action.payload) {
                throw new Error("action.payload missing in quantity action")
            }
            
            // here the payload just the item with new qty submitted by the user!!
            const {sku, qty} = action.payload
            const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)
            if (!itemExists){
                throw new Error("not find that item in your cart")
            }

            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

            return {...state, cart: [...filteredCart, { ...itemExists, qty}]}
            
        }
        case REDUCER_ACTION_TYPE.SUBMIT: {
            // when submit, just simply empty the cart
            return {...state, cart: []}
        }
        default:
            throw new Error('undefined reducer action type')
    }
}


// notice that this one includes all the props and methods passing to children, so this should be the real context that context provider should provide to
const useCartContext = () => {
    const [state, dispatch] = useReducer(reducer, initCartState)

    // to memorize the REDUCER_ACTION_TYPE , so will not cause the rerendering
    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE
    }, [])

    // note: how to use the reduce function in the array of object when you just want to summarize by adding one props common in the object
    const totalItems: number = state.cart.reduce((prevVal, cartItem) => prevVal + cartItem.qty, 0)


    // because this is a dollar formatter, so it should be a string rather than a number
    const totalPay = new Intl.NumberFormat('en-US', {style: 'currency', currency: "USD"}).format(
        state.cart.reduce((preVal, cartItem) => preVal + cartItem.price * cartItem.qty, 0)
    )

    const cart = state.cart.sort((a,b) => {
        // extract the last 4 digit from the sku of item
        const itemA = Number(a.sku.slice(-4))
        const itemB = Number(b.sku.slice(-4))
        return itemA - itemB
    })

    // dispatch will keep its quality and will not cause a re-rendering
    return {dispatch, REDUCER_ACTIONS, totalItems, totalPay, cart}

}


export type useCartContextType = ReturnType<typeof useCartContext>

type childrenType = {
    children?: ReactElement | ReactElement[],
}

// note: initCartContextState just define the original state. no need to pass any logic
const initCartContextState: useCartContextType = {
    dispatch: () => {},
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    totalItems: 0,
    totalPay: '',
    cart: [],
}

export const CartContext = createContext<useCartContextType>(initCartContextState)

export const CartProvider = ({children}:childrenType): ReactElement => {
    return (
        <CartContext.Provider value={useCartContext()}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = (): useCartContextType => {
    return useContext(CartContext)
}
