import Navbar from './navbar';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css"

const Header = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);
    return (
        <div className="header-bar">
            <div className="name" onClick={handleOnClick}>BRIAN HUYNH</div>
            <nav className="navbar">
                <Navbar />
            </nav>
        </div>
    );
};

export default Header;