import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Product from "./pages/Product/Product.jsx";
import Cart from "./pages/Cart/Cart.jsx";

export default function RoutePage() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}