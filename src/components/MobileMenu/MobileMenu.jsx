
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const MobileMenu = ({ isOpen, onClose }) => {


  return createPortal(
    <div>      
    </div>,
    modalRoot
  );
};
