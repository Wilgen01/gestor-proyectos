import { Modal } from 'react-bootstrap';

interface BasicModalProps {
    show: boolean;
    title: string;
    handleClose: () => void;
    children: React.ReactNode;
}


const BasicModal = ({ show, handleClose, title, children } : BasicModalProps) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  );
};

export default BasicModal;
