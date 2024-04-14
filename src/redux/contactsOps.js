import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const baseURL = 'https://661b894a65444945d04faed4.mockapi.io';

const axiosInstance = axios.create({
    baseURL,
});

export const fetchContactsAsync = createAsyncThunk(
    'contacts/fetchContacts',
    async(_, thunkAPI) => {
        try {
            const response = await axiosInstance.get('/contacts');
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    } );

    export const addContactAsync = createAsyncThunk(
        'contacts/addContacts',
        async(contact, thunkAPI) => {
            try{
                const response = await axiosInstance.post('/contacts', contact);
                return response.data;
            } catch(error) {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    );

    export const deleteContactAsync = createAsyncThunk(
        'contacts/deleteContacts',
        async(contactId, thunkAPI) => {
            try {
                const response = await axiosInstance.delete(`/contacts/${contactId}`);
                return response.data;
            } catch(error) {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    )


