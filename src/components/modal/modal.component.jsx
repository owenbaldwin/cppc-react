import './modal.styles.scss';
import { mdClose } from 'react-icons/md'
import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';



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
            <div className='modal-content'>
              <p>it's working</p>
              <button>join now</button>
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
