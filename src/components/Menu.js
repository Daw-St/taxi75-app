import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './Menu.css';
const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                <Button color='yellow'>Informacje</Button>
            </Link>
            <Link to="/seniors" className="item">
                <Button color='yellow'>Seniorzy</Button>
            </Link>
            <Link to="/rides" className="item">
                <Button color='yellow'>Przejazdy</Button>
            </Link>
            <Link to="/logs" className="item">
                <Button color='yellow'>Logi</Button>
            </Link>
        <div className="right menu">
            <Link to="/loginform" className="item">
                <Button color='yellow'>Zaloguj</Button>
            </Link>
        </div>
        </div>
    )
}

export default Header;