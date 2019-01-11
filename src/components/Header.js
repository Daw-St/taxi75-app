import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
        <Link to="/" className="item">
            Strona Glowna
        </Link>
        <Link to="/tablerecord" className="item">
            Tabela
        </Link>
        <div className="right menu">
            <Link to="/loginform" className="item">
                Zaloguj
            </Link>
        </div>
        </div>
    )
}

export default Header;