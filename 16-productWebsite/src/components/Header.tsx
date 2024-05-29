import CartSummary from "./CartSummary"
import { NavLink, useLocation } from "react-router-dom"


const Header = () => {

    // get current url location. used for dynamically update the button url. will update because everytime when you go to a new page with different router url, page will be re-rendered then location will be updated. we can utilize this property to update Header button css
    const location = useLocation();

    const getPath = ():string => {
        switch (location.pathname){
            case "/":
                return "/cart"
            case "/cart":
            case "/success":
                return "/"
            default:
                return "/"
        }
    }

    const getTitle = ():string => {
        switch (location.pathname){
            case "/":
                return "Cart"
            case "/cart":
            case "/success":
                return "Product"
            default:
                return "Cart"
        }
    }


    return (
        <header className="flex justify-between items-center px-2 border-b-2 mt-1 mb-1  pb-2">
            <h1 className="font-bold text-2xl">Rose Beauty Co.</h1>
            <div className="text-right text-sm">
                <CartSummary />
                <button className="my-1"><NavLink className="bg-slate-200 border border-slate-300 py-1 px-2 rounded-md hover:bg-pink-200 hover:border-pink-300" to={getPath()} >View {getTitle()}</NavLink></button>
            </div>
        </header>
    )
}

export default Header