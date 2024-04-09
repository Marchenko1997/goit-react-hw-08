
import css from './SearchBox.module.css';
import { IoIosContacts } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import {changeFilter} from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';
const SearchBox = () => {
   const dispatch = useDispatch();
   const filter = useSelector(selectFilter);
  
    const handleChange = (event) => {
     const text = event.target.value;
     dispatch(changeFilter(text));
    };

    
  
    return (
      <div className={css.searchbox}>
         <label htmlFor="search"  className={css.searchlabel}> <IoIosContacts  className={css.searchicon} />Find contacts by name</label>
        <input type="text" id ="search" value={filter} onChange={handleChange}  className={css.searchinput}/>
     
      </div>
    );
  };


  export default SearchBox;