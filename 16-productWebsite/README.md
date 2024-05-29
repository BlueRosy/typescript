# 16: Shopping Website

`Project Demo`: 

<img src="shoppingWebsiteDemo.gif" width="600" />
<br>
<br>


`project reflection`:

hard point 1: how to update the Header button style based on the url ? using `useLocation()` hook in the 'react-router-dom'

handpoint 2: how to load products data from local file?
in my case, 
1. I just create a data folder and write a products.json file
2. in that file, put some .json code that follows item[] 
3. I write a async hook that might return `Promise<item[] | undefined>` undefined because throw new error so it cannot promise to return the data itself. 
4. think about how to load data synchronically before the DOM content in the web router has been loaded. (use `useLoaderData()` hooks perfectly solve the issue. notice that you do need to pass the Route with a `loader={loaddatafunction}`). when needing to use that data, just make `data = useLoaderData() as item[]`; 

Learning point: (if you want to apply the displayProductContext and supply that product data loaded globally)
1. create a productContext file
2. in the file, define product prototype (with its props , same to your json file structure)
3. create the `initProductState: product[] = []`
4. next, create the initProductContext: `createContext<productContextType>({products: []})`, please remember to define the initProductContext type : `type productContextType = { products: Product[]}`
5. create the contextprovider in the same folder: 
    1. define the childrenType
    2. inside the provider, define a state var `[products, setProducts] = useState<ProductType[]>(initProductState)`
    3. this provider will provide the `products` as the value to all the children. and to make this products get all the products in the .json file, write a useEffect code inside the provder, which will only run the DOM mounted time. next, just provide this new set data down to children
    
    ```
    useEffect(() => {
        
        const fetchdata = async (): productType[] => {
            const data = fetch("http://localhost:3500/products").
            then(reponse => {return reponse.json()}).
            catch(if (error instanceof Error) console.log(error.messsage))

            return data
        }

        fetchdata().then(data => setProducts(data))
    }, [])
    ```

    4. notice the web url we fetch the data, so how the local products.json file can be subject and found in that url? we can launch the data temporaily online in the port 3500.
    ```
        npx json-server -w data/products.json -p 3500
    ```
    and then in the another terminal to run our project.
    or you just use the local path to get the product data, that will be also fine!!


hardpoint3: write a cartContextProvider and useCart hook , this can be done normally or using useReducer to separately define the state and methods to manage the state. finally include all of them to build a carContext!! (`to refer, please check the learnings folder`)


hardpoint4: how to pass both contexts to children (learning: just use one router url, all of them just be rendered the app.jsx, but the bad point is => like a fake web)
my method: use react-router-dom to create router and route different pages in different url

if you decide to use the same page without router, just use `[viewCart, setViewCart] = useState(false)` to decide and render which parts `product page` or `cart page` will be rendered in the same page !! note that: useState can trigger the re-rendering of the page!!

handpoint5: how to memorize the cart data in local storage, so that the next time you come in, you can just see all the items added in the cart like the former state
to do that, just define`a load() and save()` function and run that using useEffect(), please note: load() have to convert the cart item one by one!!


learning point 1: when you want to dynamically extract the image from the url
vite special point:
```
    const img: string = new URL(`..images/${product.sku}.jpg`, import meta.url).href
```

learning point 2: if you want to format your money / pay (number) into a string format with US dollar sign:
```
    new Intl.NumberFormat('en-US', {style:'currency', currency: 'USD'}).format(price)
```

learning point3:
if you have mutliple contextProvider, you can warp one inside another one like the following code
```
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
        <ProductProvider>
            <App />
        </ProductProvider>
    </CartProvider>
  </React.StrictMode>,
)

```

learning point 4: to get an option menu for the qty of item in the cart, just use
```
    const highstQty: number = 20 > item.qty ? 20 : item.qty
    const optionValues: number[] = [...Array(highestQty).keys()]
    const options: ReactElement[] = optionValues.map(val => {
        return <option key={`opt${val}`} value={val}>{val}</option>
    })

    then we get format this input selector element to be
    <Select>
       {options}
    </Select>
```

learning point 5: every dispatch function when using
```
    const funcname = () => dispatch({
        type: typename,
        payload: xxx,
    })
    
```

warning point1: onClick={}, if you only pass a functionname () {} , note this is not an arrow function, then it will be automatically run without onClick, 
please change it to
```
    onClick = {() => functionname()}
```

if the funname is a function alias (arrow function) without parames, then you can write
```
    onClick = {functalias}
```

