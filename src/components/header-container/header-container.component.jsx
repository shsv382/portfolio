import React from "react";
import './header-container.styles.scss';

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const HeaderContainer = () => {
    const history = useHistory();
    return (
        <div className="header-container">
            <Link className="header-container-link" to="about">Обо мне</Link>
            <Link className="header-container-link " to="portfolio">Портфолио</Link>
            <Link className="header-container-link " to="contact">Контакты</Link>
        </div>
    )
}

export default HeaderContainer;