import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import logo from '../assets/LogoTereMalacitana.png';
//import playa from '../assets/playa.jpg';
import editorial from '../assets/Editorial/Dino1.jpg'
import tote from '../assets/Cultural/Tote.jpg'
import pintura from '../assets/Pintura/Luke.jpg'
import videojuego from '../assets/videojuegos/Videojuego.jpg';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Portfolio - Tere Ávila</title>
        <meta name="description" content="Bienvenido a mi portfolio. Aquí puedes encontrar ejemplos de mi trabajo en videojuegos, pintura, ilustración editorial y cultural." />
      </Helmet>

      <h1>Soy Tere Malacitana, ¡bienvenido a mi portfolio!</h1>
      <p className='Intro'> Aquí podrás ver distintas muestras de mi trabajo artístico, tanto de <strong>Pintura Clásica</strong> y <strong>Videojuegos</strong> como ilustración, estando por un lado <strong>Ilustraciones Editoriales</strong>, y por otro las <strong>Ilustraciones Culturales</strong>, en las que incluyo tanto ilustraciones referentes a mi ciudad, Málaga y su cultura, como a la naturaleza entre otras diversas temáticas.</p><br />
      {/* <Slider /> */}
      <div className='Muestras'>
        {/* <div className='MiniMuestras'>
          <Link to="/diseno-desarrollo-web">
            <div className='TituloMuestra'>Diseño y Desarrollo Web</div>
            <div className='ImagenMuestra'><img src={playa} alt="img ejemplo"/></div>
          </Link>
        </div> */}
        <div className='MiniMuestras'>
          <Link to="/ilustracion-editorial">
            <div className='TituloMuestra'>Ilustración editorial</div>
            <div className='ImagenMuestra'><img className="Editorial" src={editorial} alt="img ejemplo"/></div>
          </Link>
        </div>
        <div className='MiniMuestras'>
          <Link to="/ilustracion-cultural">
            <div className='TituloMuestra'>Ilustración cultural</div>
            <div className='ImagenMuestra'><img className="Cultural" src={tote} alt="img ejemplo"/></div>
          </Link>
        </div>
        <div className='MiniMuestras'>
          <Link to="/pintura-clasica">
            <div className='TituloMuestra'>Pintura clásica</div>
            <div className='ImagenMuestra'><img className="Pintura" src={pintura} alt="img ejemplo"/></div>
          </Link>
        </div>
         <div className='MiniMuestras'>
          <Link to="/videojuegos">
            <div className='TituloMuestra'>Videojuegos</div>
            <div className='ImagenMuestra'><img className="Videojuegos" src={videojuego} alt="img ejemplo"/></div>
          </Link>
        </div>
      </div>
      <h2>¿Quién soy?</h2>
      <div className='QuienSoy'>
      
    
      <div className='QuienText'>
      
      <p>
      <h3>¡Mi nombre es Tere Ávila!</h3>
        Desde siempre me ha gustado el arte, así que decidí estudiar <strong>Bellas Artes</strong> y más tarde el <strong>Ciclo Superior de Ilustración</strong>, que me ha servido para especializarme aún más. También llevo desde 2018 realizando encargos de ilustraciones personalizadas en distintos estilos. Ah, y también escribí y dibujé mi propio libro: <strong><em>"El Tridente Bajo Las Olas"</em></strong>.<br/><br/>
        Gracias a estos estudios y a formaciones complementarias, domino el uso de distintas técnicas tanto de dibujo <em>(acuarelas, rotuladores, grafitos, tinta o medios digitales como Photoshop, Paint Tool SAI, Procreate...)</em> como de pintura <em>(acrílico, gouache y óleo)</em>.<br/><br/>
        </p>
      </div>
      <img src={logo} alt="logo"/>
      </div>
      {/* <h2>¿Quieres un encargo?</h2>
      <p>Aquí tienes ejemplos de diferentes encargos que he realizado:</p>
      <br/>
      <ImageCarousel /> */}
    </div>
  );
}

export default Home;
