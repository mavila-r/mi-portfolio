import React from 'react';
import { Helmet } from 'react-helmet';
import ImageGallery from '../components/ImageGallery';
import tote from '../assets/Cultural/Tote.jpg'
import reina from '../assets/Cultural/Reina.jpg'
import hum from '../assets/Cultural/Hum.jpg'
import rico from '../assets/Cultural/Rico.jpg'
import info from '../assets/Cultural/Info.jpg'
import cala from '../assets/Cultural/cala.JPG'
import geranio from '../assets/Cultural/geranio.JPG'

const IlustracionCultural = () => {

  const images = [
    { id: 2, src: info, alt: 'Image 3' },
    { id: 6, src: cala, alt: 'Image 2' },
    { id: 7, src: geranio, alt: 'Image 2' },
    { id: 1, src: tote, alt: 'Image 1' },
    { id: 5, src: reina, alt: 'Image 5' },
    { id: 4, src: hum, alt: 'Image 4' },
    { id: 3, src: rico, alt: 'Image 2' },
    // Agrega más imágenes aquí si es necesario
  ];
  return (
    <div>
      <Helmet>
        <title>Ilustración Cultural - Tere Ávila</title>
        <meta name="description" content="Ejemplos y trabajos de ilustración cultural." />
      </Helmet>
      <h2>Ilustración Cultural</h2>
      <p>
     Texto de introducción ilustración cultural

      </p>
      <ImageGallery images={images}/>
    </div>
  );
}

export default IlustracionCultural;
