// import logo from './logo.svg';
// import './App.css';
import Navbar from './component/navbar/navbar'
import Intro from './component/Intro/intro'
import Portfolio from './component/portfolio/portfolio'
import Work from './component/work/work'
import Testimonial from './component/testimonial/testimonial'
import Contact from './component/contact/contact'
import './app.scss'
import {useState} from 'react';
import Menu from './component/menu/menu';

import Translate from './component/Translate/translate';

function App() {
  //state for hamburger menu
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div className="app">
      <Translate/>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <Intro/>
        <Portfolio/>
        <Work/>
        <Testimonial/>
        <Contact/>        
      </div>
      <Translate/>
    </div>
    
  );
}

export default App;
