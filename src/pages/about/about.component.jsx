import React from "react";
import './about.styles.scss';

const About = () => {
    return (
        <div className="about-page">
            <div className='passport'>
                <img alt="avatar" src='./images/avatar.jpg' />
                <h1>
                    Всем привет! Я ReactJS разработчик, <br />
                    влюблен в WEB и Front-End с 2016 года!
                </h1>
            </div>
            <div className='site-images-box'>
                <img alt="laptop" src='./images/laptop.png' />
                <img alt="phone" src='./images/phone.png' />
            </div>
            <div className="about-article">
                <h1>Нужен красивый сайт? Обращайтесь!</h1>
                <ul className="skills">
                    <li>
                        Разработка фронт-энда любой сложности - 
                        это мой профиль!
                    </li>
                    <li>
                        Пишу прекрасные сайты на <b>ReactJS</b>,
                    </li>
                    <li>
                        мастерски управляю состоянием с помощью <b>Redux</b>,
                    </li>
                    <li>
                        делаю всё быстро благодаря <b>SASS</b>,
                    </li>
                    <li>
                        располагаю все по полочкам с <b>Flexbox</b> и <b>Grid</b>,
                    </li>
                    <li>
                        тестирую, что ничего не отвалилось, <b>Jest</b>'ом,
                    </li>
                    <li>
                        делаю жизнь проще, изучая другие интересные и полезные библиотеки!
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;