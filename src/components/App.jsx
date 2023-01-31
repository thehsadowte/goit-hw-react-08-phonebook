// import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'services/API';

import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/layout"></Route>
    </Routes>
  );
};

export function App2() {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.container}>
      <ContactForm />
      {contacts && (
        <>
          <Filter />
          <ContactsList />
        </>
      )}
    </div>
  );
}
