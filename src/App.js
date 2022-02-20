import React from 'react';
import './App.scss';
import './assets/fonts/Jura-VariableFont_wght.ttf';

import Header from './components/header/header.component';
import About from './pages/about/about.component';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <About />
      </div>
    </div>
  );
}

export default App;
