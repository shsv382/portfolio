import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './assets/fonts/Jura-VariableFont_wght.ttf';

import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <div className='site_images_box'>
          <img alt="laptop" src='./images/laptop.png' />
          <img alt="phone" src='./images/phone.png' />
        </div>
      </div>
    </div>
  );
}

export default App;
