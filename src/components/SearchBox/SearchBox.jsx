// SearchBox.jsx
import { IoIosContacts } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { changeNameFilter, changePhoneFilter } from "../../redux/filters/slice";
import {
  selectNameFilter,
  selectPhoneFilter,
} from "../../redux/filters/selectors";
import { Box, TextField, InputAdornment, Typography } from "@mui/material";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: 1,
        width: "100%",
        maxWidth: 400,
        marginTop: 2,
      }}
    >
      <Typography
        variant="subtitle1"
        component="label"
        htmlFor="search"
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        <IoIosContacts style={{ fontSize: 24 }} />
        Find contacts by name or phone number
      </Typography>
      <TextField
        id="search"
        variant="outlined"
        placeholder="Enter name or phone number"
        value={nameFilter || phoneFilter}
        onChange={handleChange}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IoIosContacts />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            "& fieldset": {
              borderColor: "#1976d2",
            },
            "&:hover fieldset": {
              borderColor: "#115293",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1976d2",
            },
          },
        }}
      />
    </Box>
  );
};

export default SearchBox;
