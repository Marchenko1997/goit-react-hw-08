import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchContactsAsync = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactAsync = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/contacts", { name, number });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactAsync = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Define the async thunk to update a contact
export const updateContactAsync = createAsyncThunk(
  "contacts/updateContact",
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
