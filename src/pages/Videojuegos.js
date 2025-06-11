import React from 'react';
import { Helmet } from 'react-helmet';
import ImageGallery from '../components/ImageGallery';




const Videojuegos = () => {

  const images = [

    // Agrega más imágenes aquí si es necesario
  ];

  return (
    <div>
      <Helmet>
        <title>Videojuegos - Tere Ávila</title>
        <meta name="description" content="Ejemplos y trabajos de videojuegos." />
      </Helmet>
      <h2>Videojuegos</h2>
      <p>
      En esta página podrás ver imágenes creadas con el objetivo de formar parte de distintos videojuegos.
<br></br>
<br></br>

      <strong>Oops, seguimos trabajando en esto, ¡vuelve pronto!</strong>
      </p>
<br />
      <ImageGallery images={images} />
    </div>
  );
}

export default Videojuegos;
