import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Login">Login</Link>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;