import { CartItem } from "./CartItem";
import { ReactElement, createContext, useContext, useEffect, useState } from "react";

type cartContextType = {
    cartItems: CartItem[],
    totalCount: number,
    totalPay: number,
    load: () => void,
    save: () => void,
    addProduct: (newProduct: CartItem) => void,
    removeProduct: (pid:string) => void,
    updateProductAmount: (pid:string, newAmount: number) => void,
    clearCart: () => void,
    updateCount: () => void,
    updatePay: () => void,
}

export const CartContext = createContext<cartContextType>({
    cartItems: [],
    totalCount: 0,
    totalPay: 0,
    load: () => {},
    save: () => {},
    addProduct: (newProduct: CartItem) => {},
    removeProduct: (pid:string) => {},
    updateProductAmount: (pid: string, newAmount:  number) => {},
    clearCart: () => {},
    updateCount:() => {},
    updatePay: () => {},
    
})

export function cartProps() {
    const [cartItems, setcartItems] = useState<CartItem[]>([])

    const [totalCount, setCount] = useState<number>(0)

    const [totalPay, setPay] = useState<number>(0)

    // here, we can write this, we will run it when call carProps, when we put cart context provider
    useEffect(() => load(), [])
    useEffect(() => save(), [cartItems, totalCount, totalPay])

    function load():void {
        const prevData: string | null = localStorage.getItem("cartItems")
        
        if (typeof prevData !== "string") return
       // must added into cart list like this , one by one
        const prevList = JSON.parse(prevData)
        for (let item of prevList){
        
            const newItem: CartItem = new CartItem(
                item._id, item._imgSrc, 
                item._title, item._price, item._amount)
            addProduct(newItem)
        }
    }

    function save(): void {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }

    // save the prev status
    function addProduct(newProduct: CartItem): void {
        setcartItems(prev => [...prev, newProduct])
    }

    function removeProduct(pid: string): void {
        setcartItems(cartItems.filter((product: CartItem) => product.id !== pid))
    }

    function updateProductAmount(pid: string, newAmount: number): void {
        setcartItems(prev => prev.map((product: CartItem): CartItem => {
            if (product.id !== pid) return product
            product.amount = newAmount 
            return product

        }))
        
    }

    function clearCart(): void {
        setcartItems([])
    }

    function updateCount(): void {
        let newCount: number = 0
        for (let product of cartItems)
            {
                newCount += product.amount
            }
        
        setCount(newCount)
    }

    function updatePay(): void {
        let newPay: number = 0
        for (let product of cartItems){
            newPay += product.price * product.amount
        }

        setPay(newPay)
    }

    return {cartItems, totalCount, totalPay, 
        load, save,
        addProduct, removeProduct, updateProductAmount,
        clearCart,
        updateCount,
        updatePay
    }
    
}

type providerType = {
    children?: ReactElement | null
}

export const CartProvider = ({children}: providerType): ReactElement => {
    return (
        <CartContext.Provider value={cartProps()}>
            {children}
        </CartContext.Provider>
    )

}

// use ReturnTypf<typepf funct> to return all returned props and function type / interface
type useCartType = ReturnType<typeof cartProps>

export const useCart = (): useCartType => {
    return useContext(CartContext)
}


