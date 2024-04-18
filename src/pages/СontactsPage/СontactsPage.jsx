import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle";
import ContactList from "../../components/ContactList/ContactList";
import  ContactForm  from "../../components/ContactForm/ContactForm";
import {fetchContactsAsync} from "../../redux/contacts/operations";
import { selectIsLoading } from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBox/SearchBox"

export default function СontactsPage() {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContactsAsync());
    }, [dispatch]);

    return (
        <>
            <DocumentTitle>Your contacts</DocumentTitle>
            <ContactForm />
            {isLoading && <div>Loading...</div>}
            <ContactList />
            <SearchBox />
        </>
    )
}