// import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'services/API';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.container}>
      <ContactForm />
      {/* {contacts.length > 0 && ( */}
      <>
        <Filter />
        <ContactsList />
      </>
      {/* )} */}
    </div>
  );
}
