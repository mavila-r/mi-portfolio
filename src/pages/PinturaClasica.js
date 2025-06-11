import React from 'react';
import { Helmet } from 'react-helmet';
import ImageGallery from '../components/ImageGallery';

import atenea from '../assets/Pintura/Atenea.jpg';
import ciervo from '../assets/Pintura/CIERVO.jpg';
import hobbit from '../assets/Pintura/Hobbit.jpg';
import jurassic from '../assets/Pintura/Jurassic Park.jpg';
import lechuza from '../assets/Pintura/LECHUZA .jpg';
import luke from '../assets/Pintura/Luke.jpg';
import sevilla from '../assets/Pintura/Sevilla.jpg';
import vulcano from '../assets/Pintura/Vulcano.jpg';



const PinturaClasica = () => {

const images = [
  { id: 1, src: luke, alt: 'Luke', titulo: 'Bodegón Luke Skywalker', tecnica: 'Óleo sobre papel' },
  { id: 2, src: vulcano, alt: 'Vulcano', titulo: 'La Fragua de Vulcano: Homenaje a Velázquez', tecnica: 'Óleo sobre tabla entelada' },
  { id: 3, src: hobbit, alt: 'Hobbit', titulo: 'En un agujero en el suelo, vivía un hobbit', tecnica: 'Gouache y rotuladores acrílicos sobre papel' },
  { id: 4, src: jurassic, alt: 'Dinosaurio', titulo: 'Cuando los dinosaurios dominaban la tierra', tecnica: 'Óleo sobre tabla entelada' },
  { id: 5, src: lechuza, alt: 'Lechuza', titulo: 'Fauna Ibérica: Lechuza común', tecnica: 'Acuarela sobre papel' },
  { id: 6, src: sevilla, alt: 'Sevilla', titulo: 'Paisajes Andaluces: Sevilla', tecnica: 'Óleo sobre tabla entelada' },
  { id: 7, src: atenea, alt: 'Atenea', titulo: 'Dioses Griegos: Atenea', tecnica: 'Gouache y rotuladores acrílicos sobre papel' },
  { id: 8, src: ciervo, alt: 'Ciervo', titulo: 'Fauna Ibérica: Ciervo europeo', tecnica: 'Acuarela sobre papel' },
];

  return (
    <div>
      <Helmet>
        <title>Pintura Clásica - Tere Ávila</title>
        <meta name="description" content="Ejemplos y trabajos de pintura clásica." />
      </Helmet>
      <h2>Pintura Clasica</h2>
      <p>
      En esta página podrás ver cuadros pintados de manera más tradicional, usando técnicas como óleo, acuarelas, acrílicos y gouache.
      </p>
<br />
      <ImageGallery images={images} />
    </div>
  );
}

export default PinturaClasica;
