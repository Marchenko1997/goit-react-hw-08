import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContactAsync } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/filters/selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    dispatch(deleteContactAsync(id));
  };

  return (
    <ul className={css.contactlist}>
      {Array.isArray(filteredContacts) &&
        filteredContacts.map((contact) => (
          <li key={contact.id} className={css.contactitem}>
            {contact.name && contact.number && (
              <Contact
                id={contact.id}
                name={contact.name}
                number={contact.number}
                handleDelete={() => handleDelete(contact.id)}
              />
            )}
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
