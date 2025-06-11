import React from 'react';
import { Helmet } from 'react-helmet';
import ImageGallery from '../components/ImageGallery';




const CV = () => {

  const images = [

    // Agrega más imágenes aquí si es necesario
  ];

  return (
    <div>
      <Helmet>
        <title>CV - Tere Ávila</title>
        <meta name="description" content="Ejemplos y trabajos de videojuegos." />
      </Helmet>
      <h2>Currículum</h2>
      <p>
      En esta página podrás ver mi currículum, tanto estudios como experiencias laborales.
<br></br>
<br></br>

      <strong>Oops, seguimos trabajando en esto, ¡vuelve pronto!</strong>
      </p>
<br />
      <ImageGallery images={images} />
    </div>
  );
}

export default CV;
