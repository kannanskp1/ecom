import React from 'react'
import { BrowserRouter as Router, Route, Routes }
  from "react-router-dom";
import ProductDetails from '../pages/ProductDetails';
import Products from '../pages/Products';
function NavItem() {
    return (
        <>
            <Router>
                <Routes>
                    
                <Route exact path="/" element={<Products />} />
                <Route exact path="/product-details/:id" element={<ProductDetails />} />
                </Routes>
            </Router>
        </>
    )
}

export default NavItem