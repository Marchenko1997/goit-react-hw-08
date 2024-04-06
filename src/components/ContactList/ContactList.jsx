import Contact from "../Contact/Contact";

import css from './ContactList.module.css';
import { useSelector , useDispatch} from 'react-redux';
import { selectFilter} from '../../redux/selectors.js';
import { deleteContact } from "../../redux/contactsSlice";
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilter);

  const handleDelete =(id) => {
    dispatch(deleteContact(id));
  }

    return (
      <ul className={css.contactlist}>
     {Array.isArray(contacts) && contacts.map(contact => (
  <li key={contact.id} className={css.contactitem}>
    {contact && <Contact contact={contact} onDelete={handleDelete} />}
  </li>
))}

      </ul>
    );
  };
  

  export default ContactList;