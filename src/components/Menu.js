import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './Menu.css';
const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/rides" className="item">
                <Button color='yellow'>Przejazdy</Button>
            </Link>
            <Link to="/seniors" className="item">
                <Button color='yellow'>Seniorzy</Button>
            </Link>
        </div>
    )
};

export default Header;
