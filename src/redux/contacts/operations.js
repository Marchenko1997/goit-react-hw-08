import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';

const baseURL = "https://connections-api.herokuapp.com";

// Селектор для получения токена из состояния Redux
const selectToken = state => state.auth.token;

// Создаем экземпляр axios с базовыми настройками
const axiosInstance = axios.create({
    baseURL,
});

// Функция для добавления заголовка Authorization с токеном в запросы
const addAuthHeader = (token) => {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const fetchContactsAsync = createAsyncThunk(
    'contacts/fetchContacts',
    async(_, thunkAPI) => {
        try {
            // Получаем токен из состояния Redux
            const token = useSelector(selectToken);
            addAuthHeader(token);
            const response = await axiosInstance.get('/contacts');
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContactAsync = createAsyncThunk(
    'contacts/addContacts',
    async(contact, thunkAPI) => {
        try{
            const token = useSelector(selectToken);
            addAuthHeader(token);
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
            const token = useSelector(selectToken);
            addAuthHeader(token);
            const response = await axiosInstance.delete(`/contacts/${contactId}`);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
