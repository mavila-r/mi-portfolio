import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import logo from './assets/LogoTereMalacitana (1).png';
import './App.css';
import { FaInstagram, FaTiktok, FaTwitter, FaShoppingCart, FaEnvelope } from 'react-icons/fa';


import Home from './pages/Home';
import DisenoDesarrolloWeb from './pages/DisenoDesarrolloWeb';
import IlustracionEditorial from './pages/IlustracionEditorial';
import IlustracionCultural from './pages/IlustracionCultural';
import PinturaClasica from './pages/PinturaClasica';
import Videojuegos from './pages/Videojuegos';
import Contacto from './pages/Contacto';
import CV from './pages/CV';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Router>
        <nav className="navbar">
          <div className="nav-left">
            <NavLink to="/" onClick={closeMenu}>
              <img className="logo" src={logo} alt="logo" />
            </NavLink>
          </div>

          <div className="nav-center">
            <ul className="Categorias">
              <li><NavLink to="/ilustracion-editorial" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Ilustración Editorial</NavLink></li>
              <li><NavLink to="/ilustracion-cultural" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Ilustración Cultural</NavLink></li>
              <li><NavLink to="/pintura-clasica" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Pintura Clásica</NavLink></li>
              <li><NavLink to="/videojuegos" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Videojuegos</NavLink></li>
            </ul>
          </div>

          <div className="nav-right">
            <ul className="Categorias">
              <li><NavLink to="/contacto" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Contacto</NavLink></li>
              <li><NavLink to="/cv" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>CV</NavLink></li>
            </ul>
          </div>

          {/* Botón hamburguesa */}
          <div
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') toggleMenu(); }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      <div className="page-container">

        {/* Menú desplegable móvil con todas las categorías + contacto + CV */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/ilustracion-editorial" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Ilustración Editorial</NavLink></li>
            <li><NavLink to="/ilustracion-cultural" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Ilustración Cultural</NavLink></li>
            <li><NavLink to="/pintura-clasica" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Pintura Clásica</NavLink></li>
            <li><NavLink to="/videojuegos" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Videojuegos</NavLink></li>
            <li><NavLink to="/contacto" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Contacto</NavLink></li>
            <li><NavLink to="/cv" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>CV</NavLink></li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diseno-desarrollo-web" element={<DisenoDesarrolloWeb />} />
          <Route path="/ilustracion-editorial" element={<IlustracionEditorial />} />
          <Route path="/ilustracion-cultural" element={<IlustracionCultural />} />
          <Route path="/pintura-clasica" element={<PinturaClasica />} />
          <Route path="/videojuegos" element={<Videojuegos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cv" element={<CV />} />
        </Routes>

        <footer>
  <div className='Pie'>
    <img className="logo_pie" src={logo} alt="logo pie" />
    <p>Tere Malacitana</p>

    <div className='TextoPie'>
      <div className="social-links">
       <a href="mailto:tavilarey@gmail.com" className="icon-link" aria-label="Gmail">
          <FaEnvelope />
        </a>
        <a href="https://www.instagram.com/teremalacitana" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@ateneamormont" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="TikTok">
          <FaTiktok />
        </a>
        <a href="https://twitter.com/ateneamormont" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://ko-fi.com/teremalacitana/shop" className="icon-link" aria-label="Tienda">
          <FaShoppingCart />
        </a>
      </div>
    </div>
  </div>
</footer>
      </div>
    </Router>
  );
}

export default App;
