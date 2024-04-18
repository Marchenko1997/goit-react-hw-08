
import PropTypes from 'prop-types';
import css from "./Contact.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {deleteContactAsync} from "../../redux/contacts/operations";


const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContactAsync(id))



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
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};


export default Contact;
