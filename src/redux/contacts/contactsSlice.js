import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  deleteContactThunk,
  addContactThunk,
} from 'redux/contacts/operations';
export const getContacts = state => state.contacts.contacts;

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const contactsSlice = createSlice({
  error: null,
  isLoading: false,
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(addContactThunk.pending, handlePending)

      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.rejected, handleRejected)
      .addCase(addContactThunk.rejected, handleRejected)

      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts = [action.payload, ...state.contacts];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, removeContact } = contactsSlice.actions;
