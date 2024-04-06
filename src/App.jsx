import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useSelector } from "react-redux";
import { selectContacts } from "./redux/selectors";
import "./App.css";

function App() {
 const contact = useSelector(selectContacts);
  return (
    <div>
    <h1>Phonebook</h1>
    <ContactForm/>
    <SearchBox  />
    <ContactList contacts={contact}/>
  </div>
  )
}

export default App
