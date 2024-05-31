import React, { useState } from 'react';
import Modal from 'react-modal';
import './ImageGallery.css';

Modal.setAppElement('#root');

const ImageGallery = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div>
      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="gallery-item" onClick={() => openModal(image)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      {currentImage && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="modal"
          overlayClassName="overlay"
        >
        <div  className="modal-container">
          <img src={currentImage.src} alt={currentImage.alt} />
          <button className="close-button" onClick={closeModal}>x</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ImageGallery;
