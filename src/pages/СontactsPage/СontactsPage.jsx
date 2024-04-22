import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle";
import ContactList from "../../components/ContactList/ContactList";
import  ContactForm  from "../../components/ContactForm/ContactForm";
import {fetchContactsAsync} from "../../redux/contacts/operations";
import { selectIsLoading } from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBox/SearchBox"
import { Loader }  from "../../components/Loader/Loader";
import { useState} from 'react';

export default function СontactsPage() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        setTimeout(() => setLoading(false), 300)
        dispatch(fetchContactsAsync());
    }, [dispatch]);

    return (
        <>
            {loading && <Loader />}
            <DocumentTitle> Contacts</DocumentTitle>
            <ContactForm />
            {isLoading && <div>Loading...</div>}
            <ContactList />
            <SearchBox />
        </>
    )
}