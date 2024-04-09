import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/selectors.js';
import { deleteContact } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/selectors.js";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter); 


  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );



  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  }

  return (
    <ul className={css.contactlist}>
      {Array.isArray(filteredContacts) && filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactitem}>
          <Contact contact={contact} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
