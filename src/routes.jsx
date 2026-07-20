import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";

export default function RoutePage() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}