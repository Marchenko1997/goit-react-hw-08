import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { Button, Typography, Box } from "@mui/material";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  if (!user) {
    return null;
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Typography variant="body1">Welcome, {user.name}</Typography>
      <Button variant="outlined" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Box>
  );
};
