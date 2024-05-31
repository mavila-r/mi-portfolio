import React from 'react';
import { Helmet } from 'react-helmet';
import ImageGallery from '../components/ImageGallery';

import dino from '../assets/Editorial/Dino1.jpg'
import dino2 from '../assets/Editorial/Dino2.jpg'
import agenda from '../assets/Editorial/Agenda.png'
import hobbit from '../assets/Editorial/Hobbit.png'
import portadatri from '../assets/Editorial/PORTADA_tridente.jpg'
import rodas from '../assets/Editorial/Rodas.png'


const IlustracionEditorial = () => {

  const images = [
    { id: 1, src: dino, alt: 'Image 1' },
    { id: 5, src: portadatri, alt: 'Image 5' },
    { id: 4, src: hobbit, alt: 'Image 4' },
    { id: 3, src: dino2, alt: 'Image 2' },
    { id: 2, src: agenda, alt: 'Image 3' },
    { id: 6, src: rodas, alt: 'Image 6' },

    // Agrega más imágenes aquí si es necesario
  ];

  return (
    <div>
      <Helmet>
        <title>Ilustración Editorial - Tere Ávila</title>
        <meta name="description" content="Ejemplos y trabajos de ilustración editorial." />
      </Helmet>
      <h2>Ilustración Editorial</h2>
      <p>
      Texto introducción ilustración editorial
      </p>
<br />
      <ImageGallery images={images} />
    </div>
  );
}

export default IlustracionEditorial;
