import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/selectors.js';
import { deleteContact } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/selectors.js";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter); // Добавлено получение значения фильтра

  console.log("Contacts:", contacts); // Добавленный console.log
  console.log("Filter value:", filter); // Добавленный console.log

  // Фильтрация контактов на основе значения фильтра
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  console.log("Filtered contacts:", filteredContacts); // Добавленный console.log

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
