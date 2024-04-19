// SearchBox.jsx
import { IoIosContacts } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { changeNameFilter, changePhoneFilter } from '../../redux/filters/slice';
import { selectNameFilter, selectPhoneFilter } from '../../redux/contacts/selectors';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);
  const phoneFilter = useSelector(selectPhoneFilter);

  const handleChange = (event) => {
    const text = event.target.value;
    dispatch(changeNameFilter(text));
    dispatch(changePhoneFilter(text));
  };

  return (
    <div className={css.searchbox}>
      <label htmlFor="search" className={css.searchlabel}>
        <IoIosContacts className={css.searchicon} />
        Find contacts by name or phone number
      </label>
      <input
        type="text"
        id="search"
        placeholder="Enter name or phone number"
        value={nameFilter || phoneFilter}
        onChange={handleChange}
        className={css.searchinput}
      />
    </div>
  );
};

export default SearchBox;
