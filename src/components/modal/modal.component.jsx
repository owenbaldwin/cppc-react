import './modal.styles.scss';
import { mdClose } from 'react-icons/md'
import React, { useRef, useEffect, useCallback } from 'react';
// import { useSpring, animated } from 'react-spring';
// import styled from 'styled-components';
import modalBackgroundImage from '../../assets/cppc-contact-bg.jpg'
import ContactForm from '../contact-form/contact-form.component';


const Modal = ({showModal, setShowModal}) => {

  const modalRef = useRef();


  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };



  return (
    <div className='modal-container'>
      {showModal ? (
        <div className='modal-background' ref={modalRef} onClick={closeModal}>
          <div className='modal-wrapper' showModal={showModal}>
            <div className='modal-content' style={{backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7) ), url(${modalBackgroundImage})`}}>
              <div className='modal-text'>
                <h1>Let's do this</h1>
                <p>Tell us about your next idea.</p>
                <p>We'll be more than happy to bring it to life.</p>
              </div>
              <ContactForm />
            </div>
            <mdClose className='close-modal-btn' aria-label='Close-modal'
              onClick={() => setShowModal (prev => !prev)} > X </mdClose>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
