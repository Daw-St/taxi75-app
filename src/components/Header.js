import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
        <Link to="/" className="item">
            Strona Glowna
        </Link>
        <div className="right menu">
            <Link to="/pagetwo" className="item">
                Wszystkie strony
            </Link>
        </div>
        </div>
    )
}

export default Header;