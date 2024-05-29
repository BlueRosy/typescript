import { useEffect } from "react"
import { useCart } from "../contexts/CartContext"

type CartSummaryProps = {
    positionStyles?:string,

}

// custom tailwindcss allowed here
const CartSummary = ({positionStyles = ""}: CartSummaryProps) => {

    const {cartItems,totalCount, totalPay, updateCount, updatePay} = useCart()

    useEffect(() => {
        updateCount()
        updatePay()
    },[cartItems])

    return (
        <div className={`text-sm ${positionStyles}`}>
            <p>Total Items: {totalCount}</p>
            <p>Total Price: ${totalPay.toFixed(2)}</p>
        </div>
    )
}

export default CartSummary