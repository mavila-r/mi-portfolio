import React, { useState } from 'react';
import Modal from 'react-modal';
import './ImageGallery.css';

Modal.setAppElement('#root');

const ImageGallery = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImage = images[currentIndex];

  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={image.id} className="gallery-item" onClick={() => openModal(index)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {modalIsOpen && (
        <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Image Modal"
  className="modal"
  overlayClassName="overlay"
>
  <div className="modal-container" onClick={(e) => e.stopPropagation()}>
    <img src={currentImage.src} alt={currentImage.alt} />
    
    <div className="info-navigation">
      <button className="arrow left" onClick={goToPrevious}>←</button>
      
      <div className="info-text">
        <h2>{currentImage.titulo}</h2>
        <p>{currentImage.tecnica}</p>
      </div>
      
      <button className="arrow right" onClick={goToNext}>→</button>
    </div>

    <button className="close-button" onClick={closeModal}>×</button>
  </div>
</Modal>

      )}
    </div>
  );
};

export default ImageGallery;
