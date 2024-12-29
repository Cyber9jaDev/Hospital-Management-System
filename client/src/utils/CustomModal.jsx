/* eslint-disable react/prop-types */
import Modal from 'react-modal';
import { UseGlobalContext } from '../contexts/GlobalContext';
import { useEffect, useState } from 'react';

Modal.setAppElement('#root');

const CustomModal = ({ children, contentLabel }) => {
  const { modalIsOpen, closeModal } = UseGlobalContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const getWindowWidth = () => { setWindowWidth(window.innerWidth) }
    window.addEventListener('resize', getWindowWidth);
    return () => { window.removeEventListener('resize', getWindowWidth) };
  }, [])
  
  const defaultModalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      overflow: "visible",
      zIndex: 1000,
      width: windowWidth <= 992 ? '98%' : '820px',
      padding: '10px'
    },
  }

  return (
    <Modal 
      style={defaultModalStyle} 
      isOpen={modalIsOpen} 
      onRequestClose={closeModal} 
      contentLabel={contentLabel ? contentLabel : 'Apply Filter'}
    > 
    { children }
    </Modal>
  )
}

export default CustomModal;