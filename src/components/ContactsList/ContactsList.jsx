// import PropTypes from 'prop-types';
import css from './ContactsList.module.css';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const setFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <>
      <ul className={css.list}>
        {setFilteredContacts().map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            {name}: {number}
            <button
              className={css.btn}
              onClick={() => dispatch(deleteContact(id))}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
