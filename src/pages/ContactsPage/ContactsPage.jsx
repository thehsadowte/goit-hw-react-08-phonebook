import { ContactForm } from 'components/ContactForm/ContactForm';
import css from 'components/App.module.css';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectLoading,
} from 'redux/contacts/selectors';

const ContactPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn && (
        <div className={css.container}>
          <h1>Phonebook</h1>
          <ContactForm />
          {contacts.length > 0 ? (
            <>
              {/* <h2>Contacts</h2> */}
              <Filter />
              <ContactsList />
            </>
          ) : (
            <h1>Contacts list is empty yet</h1>
          )}
          {isLoading && <Loader />}
          {error && <h1>{error}</h1>}
        </div>
      )}
    </>
  );
};

export default ContactPage;
