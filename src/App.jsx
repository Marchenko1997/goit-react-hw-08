import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsAsync, addContactAsync } from "./redux/contactsOps";
import { useEffect } from "react";
import { selectContacts, selectIsLoading, selectError } from "./redux/selectors";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const contact = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsAsync());
  }, [dispatch]);

  const handleAddContact = async (contact) => {
    dispatch(addContactAsync(contact));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      {isLoading && !error && <b>Request in progress...</b>}
      <SearchBox />
      <ContactList contacts={contact} />
    </div>
  );
}

export default App;
