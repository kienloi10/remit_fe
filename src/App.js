import React from 'react';
import { AppProvider } from './AppContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About_us from './Pages/about_us/About_us';
import Contact from './Pages/contact/Contact';
import Product_detail from './Pages/product_detail/Product_detail';
import Products from './Pages/products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'





const App = () => {
    return (
        <div>
            <AppProvider>
                <Router>
                    
                    <Routes>
                        <Route index element={<Home />} />
                        {/* <Route path='/Frontend' element={<Home />} /> */}
                        <Route path='/Contact' element={<Contact />} />
                        <Route path='/*' element={<About_us />} />
                        <Route path='/Products' element={<Products />} />
                        <Route path="/Products/:id" element={<Product_detail />} />
                        
                    </Routes>

                </Router>

            </AppProvider>

        </div>
    );
}

export default App;
