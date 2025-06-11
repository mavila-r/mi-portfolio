import React from 'react';
import { Helmet } from 'react-helmet';
import ImageGallery from '../components/ImageGallery';
import tote from '../assets/Cultural/Tote.jpg'
import reina from '../assets/Cultural/Reina.jpg'
import hum from '../assets/Cultural/Hum.jpg'
import rico from '../assets/Cultural/Rico.jpg'
import info from '../assets/Cultural/Info.jpg'
import mano from '../assets/Cultural/Mano Pollinica.jpg'
import espeto from '../assets/Cultural/Espeto.jpg'

const IlustracionCultural = () => {

const images = [
  { id: 1, src: info, alt: 'infografia', titulo: 'Infografía Málaga', tecnica: 'Ilustración vectorial en Illustrator' },
  { id: 2, src: hum, alt: 'humillación', titulo: 'Humillación y estrella', tecnica: 'Ilustración Digital' },
  { id: 3, src: espeto, alt: 'espeto', titulo: 'Espeto de sardinas', tecnica: 'Óleo sobre papel' },
  { id: 4, src: mano, alt: 'mano', titulo: 'Detalles Cofrades: Pollinica', tecnica: 'Óleo sobre tabla entelada' },
  { id: 5, src: tote, alt: 'tote', titulo: 'Bajo la mirada de Málaga', tecnica: 'Ilustración Digital' },
  { id: 6, src: rico, alt: 'rico', titulo: 'EL Rico', tecnica: 'Ilustración Digital' },
  { id: 7, src: reina, alt: 'reina', titulo: 'Reina de San Agustín', tecnica: 'Ilustración Digital' },
];

  return (
    <div>
      <Helmet>
        <title>Ilustración Cultural - Tere Ávila</title>
        <meta name="description" content="Ejemplos y trabajos de ilustración cultural." />
      </Helmet>
      <h2>Ilustración Cultural</h2>
      <p>
      En esta página podrás ver diferentes ilustraciones cuya temática he decidido llamar <strong>cultural</strong>, ya que se centra en la ciudad de Málaga, sus paisajes y costumbres, pero también en otros elementos como la naturaleza.
      </p>
      <br />
      <ImageGallery images={images}/>
    </div>
  );
}

export default IlustracionCultural;
