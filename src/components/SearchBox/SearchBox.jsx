
import PropTypes from 'prop-types';
import css from './SearchBox.module.css';
import { IoIosContacts } from "react-icons/io";
const SearchBox = ({filter, onFilterChange}) => {
   
  
    const handleChange = (evt) => {
      const text=evt.target.value;
      onFilterChange(text);
    };
  
    return (
      <div className={css.searchbox}>
         <label htmlFor="search"  className={css.searchlabel}> <IoIosContacts  className={css.searchicon} />Find contacts by name</label>
        <input type="text" id ="search" value={filter} onChange={handleChange}  className={css.searchinput}/>
     
      </div>
    );
  };

  SearchBox.propTypes = { 
    filter: PropTypes.string.isRequired, 
    onFilterChange: PropTypes.func.isRequired, 
  };
  
  export default SearchBox;