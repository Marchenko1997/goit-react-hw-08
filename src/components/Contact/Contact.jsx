import { useState } from 'react';
import PropTypes from 'prop-types';
import css from "./Contact.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContactAsync } from "../../redux/contacts/operations";
import { toast } from 'react-hot-toast';
import Modal from 'react-modal';
import ContactEditForm from "../ContactEditForm/ContactEditForm";

Modal.setAppElement('#root');

const Contact = ({ id, name = '', number = '' }) => {
  const dispatch = useDispatch();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
    setIsEditFormOpen(false); // Закрываем другое модальное окно при открытии этого
  };

  const confirmDelete = () => {
    dispatch(deleteContactAsync(id));
    setIsDeleteModalOpen(false);
    toast.success('Contact deleted successfully.');
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div>
      <p className={css.itemname}>
        <BsFillPersonFill /> {name}
      </p>
      <p className={css.itemnumber}>
        <FaPhone /> {number}
      </p>

      <button
        type='button'
        onClick={handleDelete}
        aria-label='delete'
        className={css.btndelete}
      >
        Delete
      </button>

      <button
        type='button'
        onClick={() => setIsEditFormOpen(true)}
        aria-label='edit'
        className={css.btnedit}
      >
        Edit
      </button>

      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={closeDeleteModal}
        className={css.modal}
        overlayClassName={css.overlay}
        contentLabel="Delete Contact Modal"
    
      >
        <div className={css.modalOverlay} onClick={closeDeleteModal}>
          <div className={css.modalContent}>
          <p className={css.modalText}>Are you sure you want to delete {name}?</p>
            <div className={css.modalButtons}>
              <button onClick={confirmDelete} className={css.yesButton}>
                Yes
              </button>
              <button
                onClick={closeDeleteModal}
                className={css.noButton}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {isEditFormOpen && (
        <ContactEditForm
          id={id}
          name={name}
          number={number}
          onCancel={() => setIsEditFormOpen(false)}
          isOpen={isEditFormOpen}
          onRequestClose={() => setIsEditFormOpen(false)}
        />
      )}
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
