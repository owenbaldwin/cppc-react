import './contact.styles.scss';
import { useState } from 'react';
import Modal from '../../components/modal/modal.component';
import Contact from '../../components/contact/contact.component';
// import { GlobalStyle } from './globalStyles';

const ContactPage = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }
  return (
    <div className='contact-page-container'>
      <Contact />
    </div>
  );
};

export default ContactPage;

    // <GlobalStyle />
// <button type="button" className='contact-page-btn' onClick={openModal}>Click Me!</button>
//       <Modal showModal={showModal} setShowModal={setShowModal} />
