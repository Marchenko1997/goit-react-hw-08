import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle";
import ContactList from "../../components/ContactList/ContactList";
import { TaskEditor } from "../../components/TaskEditor/TaskEditor";
import {fetchContactsAsync} from "../../redux/contacts/operations";
import { selectIsLoading } from "../../redux/contacts/selectors";

export default function TasksPage() {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContactsAsync());
    }, [dispatch]);

    return (
        <>
            <DocumentTitle>Your contacts</DocumentTitle>
            <TaskEditor />
            {isLoading && <div>Loading...</div>}
            <ContactList />
        </>
    )
}