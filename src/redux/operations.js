import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://63d42dfcc52305feff5f4e6c.mockapi.io/contact-list'
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (newItem, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://63d42dfcc52305feff5f4e6c.mockapi.io/contact-list',
        newItem
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const removeContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://63d42dfcc52305feff5f4e6c.mockapi.io/contact-list/${id}`,
        {
          params: { id },
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
