import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './webpages/Layout.tsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ProductPage from './webpages/ProductPage.tsx'
import CartPage from './webpages/CartPage.tsx'
import { CartProvider } from './contexts/CartContext.tsx'
import { loadproductdata } from './hooks/loadproductdata.ts'
import Success from './webpages/Success.tsx'



const router = createBrowserRouter(
  createRoutesFromElements(
   
    <Route path='/' element={<Layout />}>
      <Route path='' element={<ProductPage/>} loader={loadproductdata}/>
      <Route path='cart' element={<CartPage />} />
      <Route path='success' element={<Success />} />
    </Route>
    
  )
)

// note: CartProvider can be added inside the React.StrictMode
ReactDOM.createRoot(document.getElementById('root')!).render(

    <React.StrictMode>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </React.StrictMode>,
  
)



