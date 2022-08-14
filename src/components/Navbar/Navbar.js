import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../Form/Authentication/Auth-Context';
const Navbar = () => {
    const {login, setLogin} = useAuth();
    function logout() {
        setLogin(false);
        localStorage.removeItem("token");
    }

    return (
    <>    

    <nav className="navbar">
        <div className="navbar-title">
            Light Box
        </div>
        <div class="navbar-links">
            <Link to='/' class="navbar-link mr-s">Home</Link>
            <Link to='/Feedback' class="navbar-link mr-s">Feedback</Link>
            
        </div>
        <div className="navbar-items">
            <div>
                <ul className="navbar-list">
                    <li className="navbar-item navbar-icon">
                        <Link to='/WatchLater' className="navbar-link">
                            <span className="btn-icon">
                                <i className="fas fa-shopping-cart"></i>
                            </span>
                        </Link>
                    </li>
                    <li className="navbar-item navbar-icon">
                        <Link to='/Signup' className="navbar-link">
                            <i className="fas fa-heart"></i></Link>
                    </li>
                </ul>
            </div>
            <Link to='/Login'
            onClick={() => setLogin(logout())}
            className="btn btn-primary">{login ? "logout" : "login"}</Link>
        </div>
    </nav> 
    </>
    )
}

export default Navbar;