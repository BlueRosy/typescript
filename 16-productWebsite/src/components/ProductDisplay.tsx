import ProductCard from "./ProductCard"
import { item } from "../contexts/Product"
import { ReactElement } from "react"

interface displayProps {
    productData: item[]
}

const ProductDisplay = ({productData}: displayProps) => {

    
    function displayProductCard(): ReactElement[]{
        return productData.map((product: item) =>
            <ProductCard key={product.id} id={product.id}
                         imgSrc={product.imgSrc}
                         title={product.title}
                         price={product.price}  />
            
        )

    }

    return (
        <div className="flex justify-between items-center flex-wrap">
            {displayProductCard()}
        </div>
    )
}

export default ProductDisplay