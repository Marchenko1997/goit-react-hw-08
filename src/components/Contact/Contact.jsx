import { useState } from 'react';
import PropTypes from 'prop-types';
import css from "./Contact.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContactAsync } from "../../redux/contacts/operations";
import { toast } from 'react-hot-toast'; // Импортируем функцию toast

const Contact = ({ id, name = '', number = '' }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    if (id) {
      setIsModalOpen(true);
    }
  };

  const confirmDelete = () => {
    dispatch(deleteContactAsync(id));
    setIsModalOpen(false);
    // Отображаем уведомление об успешном удалении контакта
    toast.success('Contact deleted successfully.');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <p className={css.itemname}>
        <BsFillPersonFill /> {name}
      </p>
      <p className={css.itemnumber}>
        <FaPhone /> {number}
      </p>

      <button type='button' onClick={handleDelete} aria-label='delete' className={css.btndelete}>
        Delete
      </button>

      {isModalOpen && (
        <div className={css.modal}>
          <div className={css.modalContent}>
            <p>Are you sure you want to delete {name}?</p>
            <button onClick={confirmDelete} className={css.yesButton}>Yes</button>
            <button onClick={closeModal} className={css.noButton}>No</button>
          </div>
        </div>
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
