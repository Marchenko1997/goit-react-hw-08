import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { deleteContactAsync } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import {List, ListItem} from "@mui/material";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    dispatch(deleteContactAsync(id));
  };

  return (
    <List>
      {Array.isArray(filteredContacts) &&
        filteredContacts.map((contact) => (
          <ListItem key={contact.id} >
            {contact.name && contact.number && (
              <Contact
                id={contact.id}
                name={contact.name}
                number={contact.number}
                handleDelete={() => handleDelete(contact.id)}
              />
            )}
          </ListItem>
        ))}
    </List>
  );
};

export default ContactList;
