// define a tsx file so we can return a ReactElement from the contextProvider
import { createContext, ReactElement, useState, useEffect, useContext } from "react"

// 1. to define the product prototype (shold be the same structure like the products.json file)
export type ProductType = {
    sku: string,
    name: string,
    price: number,
}

const initState: ProductType[] = []
// const initState: ProductType[] = [
//     {
//         "sku": "item0001",
//         "name": "Widget",
//         "price": 9.99
//     },
//     {
//         "sku": "item0002",
//         "name": "Premium Widget",
//         "price": 19.99
//     },
//     {
//         "sku": "item0003",
//         "name": "Deluxe Widget",
//         "price": 29.99
//     }
// ]


export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

export const ProductsContext = createContext<UseProductsContextType>(initContextState)


// the most important part for the async function to fetch data and provide the data to children !!
type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)

    useEffect(() => {
        // notice: fetchProducts() will return a Promise type rather than the products itself. so we have to set a products state variable and use .then(data => setProducts(data))
        const fetchProducts = async (): Promise<ProductType[]> => {
            const data = await fetch('http://localhost:3500/products').then(res => {
                return res.json()
            }).catch(err => {
                if (err instanceof Error) console.log(err.message)
            })
            return data
        }

        // should be noticed !!!
        fetchProducts().then(products => setProducts(products))
    }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )

}



// note: useProducts can be separately put into the hooks as a custom hook to use the ProductsContext

export const useProducts = ():UseProductsContextType =>  {
    return useContext(ProductsContext)
}