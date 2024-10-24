import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import { logOut } from "../../redux/auth/operations";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const drawerWidth = 240;
const navItemsLoggedOut = ["Home", "Register", "Login"];
const navItemsLoggedIn = ["Home", "Contacts"];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <List>
        {(isLoggedIn ? navItemsLoggedIn : navItemsLoggedOut).map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            style={{ textDecoration: "none" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
        {isLoggedIn && (
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemText primary="Log Out" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {isLoggedIn ? `Welcome, ${user.name}` : "MUI"}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, gap: 2 }}>
            {(isLoggedIn ? navItemsLoggedIn : navItemsLoggedOut).map((item) => (
              <Button
                key={item}
                component={NavLink}
                to={`/${item.toLowerCase()}`}
                variant="outlined"
                sx={{
                  color: "#fff",
                  mx: 2,
                  borderColor: "#fff",
                  "&:hover": {
                    borderColor: "#fff",
                    backgroundColor: "#fff",
                    color: "#1976d2",
                  },
                }}
              >
                {item}
              </Button>
            ))}
            {isLoggedIn && (
              <Button
                variant="outlined"
                sx={{
                  color: "#fff",
                  mx: 2,
                  borderColor: "#fff",
                  "&:hover": {
                    borderColor: "#fff",
                    backgroundColor: "#fff",
                    color: "#1976d2",
                  },
                }}
                onClick={handleLogout}
              >
                Log Out
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
