import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  // Имя слайса
  name: 'filter',
  // Начальное состояние редюсера слайса
  initialState: initialState,
  // Объект редюсеров
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      // logout
      .addCase(logOut.fulfilled, state => {
        state.filter = '';
      }),
});

// Генераторы экшенов
export const { filterContacts } = filterSlice.actions;
// Редюсер слайса
export const filterReducer = filterSlice.reducer;
