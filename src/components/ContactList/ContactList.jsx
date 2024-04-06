import Contact from "../Contact/Contact";
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelectors, useDispatch} from 'react-redux';
import { selectFilter} from '../../redux/selectors.js';
import { deleteContact } from "../../redux/contactsSlice";
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelectors(selectFilter);

  const handleDelete =(id) => {
    dispatch(deleteContact(id));
  }

    return (
      <ul className={css.contactlist}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.contactitem}>
            {contact && <Contact contact={contact} onDelete={handleDelete} />}
          </li>
        ))}
      </ul>
    );
  };
  
  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
      })
    ).isRequired,
    onDelete: PropTypes.func.isRequired
  };
  
  export default ContactList;