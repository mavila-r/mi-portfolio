import React from 'react';
import { Helmet } from 'react-helmet';
import ImageGallery from '../components/ImageGallery';

import dino from '../assets/Editorial/Dino1.jpg'
import dino2 from '../assets/Editorial/Dino2.jpg'
import agenda from '../assets/Editorial/Agenda.png'
import hobbit from '../assets/Editorial/Hobbit.png'
import portadatri from '../assets/Editorial/PORTADA_tridente.jpg'
import rodas from '../assets/Editorial/Rodas.png'


const PinturaClasica = () => {

const images = [
  { id: 1, src: dino, alt: 'Dinosaurio', titulo: 'El rugido eterno', tecnica: 'Óleo sobre lienzo' },
  { id: 5, src: portadatri, alt: 'Tridente', titulo: 'La fuerza del mar', tecnica: 'Acrílico sobre tabla' },
  { id: 4, src: hobbit, alt: 'Hobbit', titulo: 'Aventuras del anillo', tecnica: 'Gouache' },
  { id: 3, src: dino2, alt: 'Dinosaurio 2', titulo: 'Furia prehistórica', tecnica: 'Óleo' },
  { id: 2, src: agenda, alt: 'Agenda', titulo: 'Ideas organizadas', tecnica: 'Digital' },
  { id: 6, src: rodas, alt: 'Rodas', titulo: 'Viaje a Rodas', tecnica: 'Acuarela' },
];

  return (
    <div>
      <Helmet>
        <title>PinturaClasica - Tere Ávila</title>
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
