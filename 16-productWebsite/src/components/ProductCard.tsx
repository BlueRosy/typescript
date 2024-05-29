import { useEffect, useState } from "react"
import { useCart } from "../contexts/CartContext"
import Product from "../contexts/Product"
import { CartItem } from "../contexts/CartItem"

type CardProps = {
    id: string,
    // image url
    imgSrc: string,
    // title
    title: string,
    // price
    price: number,
}

const ProductCard = ({id, imgSrc, title, price}: CardProps) => {


    const product: Product = new Product(id, imgSrc, title, price)

    const [incart, setIncart] = useState<boolean>(false)

    const {cartItems, addProduct} = useCart()

    // everytime mount this component, should check if it is added in the cart

    useEffect(() => checkItemStatus() ,[cartItems])

    function checkItemStatus():void {
        if (incart) return
        for (let item of cartItems) {
            if (item.id === product.id){
                setIncart(true)
                return
            }
        }
    }

    function addToCart():void {
        if (incart) return
        const cartItem = new CartItem(product.id, product.imgSrc, product.title, product.price)
        addProduct(cartItem)
        setIncart(true)
    }
    
    
    
    return (
    <div className='text-sm w-72 px-3 py-2 my-2 border-solid border-2 rounded-lg'>
        <h4 className='font-semibold w-64 mb-1 ml-1'>{title}</h4>
        <img src={imgSrc} alt="temporily not available"
        width={300} className='rounded-xl mb-1' />
        <p className='ml-1'>${price.toFixed(2)} <span className="text-pink-400">{incart? " => added to cart" : ""}</span> </p>
        <button className='bg-slate-200 border-2 border-slate-300 px-1 rounded-md ml-1 cursor-pointer hover:bg-pink-200 hover:border-pink-300' onClick={() => addToCart()}>Add to Cart</button>
    </div>)
}


export default ProductCard