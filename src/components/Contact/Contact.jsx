import PropTypes from 'prop-types';
import css from './Contact.module.css'
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";

const Contact = ({contact, onDelete}) => {
    const {id ,name, number}= contact;

    const handleDelete = () => {
        onDelete(id);
      };
  return (
    <div>
        <p className={css.itemname}><BsFillPersonFill />{name}</p>
        <p className={css.itemnumber}> <FaPhone /> {number}</p>
      <button onClick={handleDelete} className={css.btndelete}>Delete</button>
    </div>
  );
};
Contact.propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired
  };
  export default Contact;