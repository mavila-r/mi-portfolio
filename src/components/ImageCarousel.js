import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const images = [
  'https://s1.elespanol.com/2023/08/17/enclave-ods/historias/787431882_235429173_1706x960.jpg',
  'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/08/01/16908932497284.jpg',
  'https://cms.w2m.com/dam/Sites/Flowo/imagenes-blog/blog/mejores-destinos-playa-verano-principal.jpg',
  // Añade más imágenes según sea necesario
];

const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Cambia la imagen cada 3 segundos
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    );
  };
  
  export default ImageCarousel;