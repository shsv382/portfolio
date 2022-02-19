import React from "react";
import './header-container.styles.scss';

const HeaderContainer = () => {
    return (
        <div class="header-container">
            <a class="header-container-link" href="#">Портфолио</a>
            <a class="header-container-link" href="#">Обо мне</a>
            <a class="header-container-link" href="#">Контакты</a>
        </div>
    )
}

export default HeaderContainer;