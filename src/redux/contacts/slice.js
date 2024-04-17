import { createSlice} from '@reduxjs/toolkit';
import { fetchContactsAsync, addContactAsync, deleteContactAsync } from "./contactsOps";


const initialState = {
    items: [],
    loading: false,
    error: null,
};

const startAsyncOperation = (state) => {
    state.loading = true;
    state.error = null;
};

const handleAsyncErrror = (state, action) => {
    state.loading = false;
    state.error = action.error.message;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchContactsAsync.pending, startAsyncOperation)
       .addCase(fetchContactsAsync.fulfilled,(state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(fetchContactsAsync.rejected, handleAsyncErrror)
       .addCase(addContactAsync.pending, startAsyncOperation)
       .addCase(addContactAsync.fulfilled, (state, action)=> {
        state.loading = false;
        state.items.push(action.payload);
       })
       .addCase(addContactAsync.rejected, handleAsyncErrror)
       .addCase(deleteContactAsync.pending, startAsyncOperation)
       .addCase(deleteContactAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(contact => contact.id!== action.payload.id)
       })
       .addCase(deleteContactAsync.rejected, handleAsyncErrror)
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
