import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import logo from './assets/LogoTereMalacitana (1).png'; // Importa la imagen
import whats from './assets/icons8-whatsapp-50 (1).png';
// import gmail from './assets/icons8-gmail-64.png';
import linkedin from './assets/icons8-linkedin-50.png';



import './App.css';

import Home from './pages/Home';
import DisenoDesarrolloWeb from './pages/DisenoDesarrolloWeb';
import IlustracionEditorial from './pages/IlustracionEditorial';
import IlustracionCultural from './pages/IlustracionCultural';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li className='logo1'>
              <NavLink to="/" activeClassName="active"><img className="logo" src={logo} alt="logo" /></NavLink>
            </li>
          </ul>
          <ul className='Categorias'>
            <li>
              <NavLink to="/diseno-desarrollo-web" activeClassName="active">Diseño y Desarrollo Web</NavLink>
            </li>
            <li>
              <NavLink to="/ilustracion-editorial" activeClassName="active">Ilustración Editorial</NavLink>
            </li>
            <li>
              <NavLink to="/ilustracion-cultural" activeClassName="active">Ilustración Cultural</NavLink>
            </li>
            <li>
              <NavLink to="/contacto" activeClassName="active">Contacto</NavLink>
            </li>
          </ul>
          <ul className='Redes'>
            
              <a href="https://drive.google.com/file/d/1-nkKJkwEmOkiqKO2XIIFpC6sxTKvNOYO/view?usp=sharing" target='blank' className="CV">CV</a>
            

            <li><a href="https://wa.me/34674766255" target='blank'><img className="whats" src={whats} alt="whatsapp" /></a></li>
            {/* <li><a href="mailto:tavilarey@gmail.com" target='blank'><img className="whats" src={gmail} alt="gmail" /></a></li> */}
            <li><a href="https://www.linkedin.com/in/tereavilarey/" target='blank'><img className="whats" src={linkedin} alt="linkedin" /></a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diseno-desarrollo-web" element={<DisenoDesarrolloWeb />} />
          <Route path="/ilustracion-editorial" element={<IlustracionEditorial />} />
          <Route path="/ilustracion-cultural" element={<IlustracionCultural />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>





        <footer>
          <div className='Pie'>
            <img className="logo_pie" src={logo} alt="logo pie" />
            <div className='TextoPie'>
              <h2>CONTACTO</h2>
              <p>tavilarey@gmail.com</p>
              <p>+34 674766255</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
