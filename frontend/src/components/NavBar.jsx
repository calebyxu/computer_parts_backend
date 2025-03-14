import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../assets/css/styles.css';
import Layout from '../components/Layout.jsx';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';

function Navbar() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Navbar;
