import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../contexts/CartContext'
import { CartItem } from '../contexts/CartItem'
import { ChangeEvent, ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

const CartPage = () => {

    const {cartItems, removeProduct, 
        updateProductAmount, clearCart} = useCart()

    function DisplayCartItem():ReactElement[] {
       return cartItems.map((item: CartItem) => (
            <li id={item.id} key={item.id} className='flex items-start justify-between gap-5 mb-2 overflow-hidden'>
                <div className='flex gap-2 min-w-80'>
                    <img src={item.imgSrc} alt="no available product" width={100}/>
                    <h5 className='max-w-72 text-left text-sm'>{item.title}</h5>
                </div>
                <h5>${item.price}</h5>
                <input type="number" min={1} value={item.amount} className='w-20 text-center border-2 border-pink-300 border-dotted rounded-md' onChange={(e:ChangeEvent<HTMLInputElement>) => Number(e.target.value) >= 1 && updateProductAmount(item.id, Number(e.target.value))}/>
                <h5>${(item.price * item.amount).toFixed(2)}</h5>
                <button><FontAwesomeIcon className='text-2xl text-red-400 hover:text-red-600 transition-colors bg-slate-200 p-1 rounded-md' icon={faXmark} onClick={() => removeProduct(item.id)}/></button>
            </li>
     
        ) )
    }
    

    return (
        <div className='h-4/5 mt-3 overflow-scroll no-scrollbar'>
            <ul>
            {DisplayCartItem()}
            </ul>
            <div className='text-center'>
            <button className={`mt-5 ${cartItems.length ? "visible" : "hidden"}`} disabled={!cartItems} onClick={() => clearCart()}><NavLink className="text-sm font-bold text-pink-300 bg-purple-100 p-4 rounded-lg hover:bg-yellow-100 hover:text-pink-400 cursor-pointer transition-colors" to={"/success"}>confirm</NavLink></button>
            </div>
           
        </div>
        
    )
}

export default CartPage