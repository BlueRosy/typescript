import {item} from "../contexts/Product"

// note: async function will always return a Promise<type> !! must define it accuracely note if raise error , should add undefined type
// to load the data pre to web loaded so that you won't get empty data first, (or else you might render a page with empty contents display at first in a router url): define loader and useLoaderData function !!, for children component, should pass preloaded data as the props
export async function loadproductdata(): Promise<item[] | undefined> {

    try {
        
        const response = await fetch("/src/data/products.json")
        if (!response.ok) throw new Error("data doesn't find!")
        const data = await response.json()
        return data
    }
    catch (error)
    {
        console.log(error)
    }

}



