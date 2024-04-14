import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "../../redux/selectors.js";
import { deleteContactAsync } from "../../redux/contactsOps";
import { selectFilter } from "../../redux/selectors.js";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(
    (contact) =>
      typeof contact.name === "string" &&
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContactAsync(id));
  };

  return (
    <ul className={css.contactlist}>
      {Array.isArray(filteredContacts) &&
        filteredContacts.map((contact) => (
          <li key={contact.id} className={css.contactitem}>
            <Contact contact={contact} handleDelete={handleDelete} />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
