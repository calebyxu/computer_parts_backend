import { Outlet, Link } from 'react-router-dom';
import { IoIosRocket } from "react-icons/io";
import '../assets/css/styles.css';

function Layout() {
    return (
        <>
            <nav>
                <Link to="/"><IoIosRocket /></Link>
                <Link to="/Login">Login</Link>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;