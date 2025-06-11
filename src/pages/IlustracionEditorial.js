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
    { id: 1, src: dino, alt: 'Dino', titulo: 'Dinos bajo la lluvia', tecnica: 'Ilustración Digital' },
  { id: 2, src: portadatri, alt: 'portadatri', titulo: 'El Tridente Bajo Las Olas', tecnica: 'Ilustración Digital' },
  { id: 3, src: hobbit, alt: 'Hobbit', titulo: 'El hobbit', tecnica: 'Ilustración Digital' },
  { id: 4, src: dino2, alt: 'Dinosaurio2', titulo: 'Dinos bajo la lluvia', tecnica: 'Ilustración Digital' },
  { id: 5, src: agenda, alt: 'agenda', titulo: 'Agenda de Alborán 2022/2023', tecnica: 'Ilustración Digital' },
  { id: 6, src: rodas, alt: 'rodas', titulo: 'El Tridente Bajo Las Olas: El Saqueo de Rodas', tecnica: 'Ilustración Digital' },

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
      En esta página podrás ver ilustraciones dedicadas principalmente al mundo editorial, tanto portadas, como ilustraciones internas, incluyendo también en algunas el proceso de la ilustración.
      </p>
<br />
      <ImageGallery images={images} />
    </div>
  );
}

export default IlustracionEditorial;
