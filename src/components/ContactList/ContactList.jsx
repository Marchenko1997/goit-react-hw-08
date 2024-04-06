import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/selectors.js';
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

 
  const validContacts = contacts.map(contact => ({
    ...contact,
    name: String(contact.name),
    number: String(contact.number)
  }));

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  }

  return (
    <ul className={css.contactlist}>
      {Array.isArray(validContacts) && validContacts.map(contact => (
        <li key={contact.id} className={css.contactitem}>
          <Contact contact={contact} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
