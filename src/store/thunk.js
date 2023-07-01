import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
const BASE_URL = `https://649ec975245f077f3e9ce4ba.mockapi.io/contacts`;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get(BASE_URL);
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk('contacts/addContact', async contact => {
  const response = await axios.post(
    BASE_URL,
    contact
  );
  return response.data;
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(
      `${BASE_URL}/${contactId}`
    );
    return contactId;
  }
);

