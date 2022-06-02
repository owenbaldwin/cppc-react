import './modal.styles.scss';
// import { mdClose } from 'react-icons/md'

const Modal = ({showModal, setShowModal}) => {
  return (
    <div className='modal-container'>
      {showModal ? (
        <div className='modal-background'>
          <div className='modal-wrapper' showModal={showModal}>
            <div className='modal-content'>
              <p>it's working</p>
              <button>join now</button>
            </div>
          </div>
        </div>
      ) : null}

    </div>
  );
};

export default Modal;
