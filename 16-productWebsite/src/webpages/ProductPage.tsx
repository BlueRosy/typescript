import ProductDisplay from "../components/ProductDisplay"
import CartSummary from "../components/CartSummary"
import { useLoaderData } from "react-router-dom"
import { item } from "../contexts/Product"


const ProductPage = () => {

    // preloading async product data !! and passing this data as props to its children component. type casting define the data type
    const data = useLoaderData() as item[]
    
    return (
        <div className='h-4/5 overflow-scroll no-scrollbar'>
            <ProductDisplay productData={data} />
            <CartSummary positionStyles="mt-5"/>
        </div>
    )
}

export default ProductPage