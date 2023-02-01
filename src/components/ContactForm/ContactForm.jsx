import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
// import { addContact, getContacts } from 'redux/contacts/contactsSlice';
import { addContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const onFormSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const checkContact = contacts.find(contact => contact.name === name);
    if (checkContact) {
      alert('Already in Contacts');
      return;
    }
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    dispatch(addContact(newContact));
    e.target.reset();
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={onFormSubmit}>
        <h1>PhoneBook</h1>
        <div className="wrapper">
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add Contact</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
