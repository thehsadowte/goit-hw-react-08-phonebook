import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <label className={css.label}>
        Enter search query
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(filterContacts(e.target.value))}
        />
      </label>
    </>
  );
};
