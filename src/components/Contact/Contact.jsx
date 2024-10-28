import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContactAsync } from "../../redux/contacts/operations";
import { toast } from "react-hot-toast";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  Box,
} from "@mui/material";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import ContactEditForm from "../ContactEditForm/ContactEditForm";

const Contact = ({ id, name = "", number = "" }) => {
  const dispatch = useDispatch();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteContactAsync(id));
    setIsDeleteModalOpen(false);
    toast.success("Contact deleted successfully.");
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <Card
      variant="outlined"
      sx={{ width: 300, borderRadius: 2, boxShadow: 3, marginTop: 2 }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <BsFillPersonFill style={{ marginRight: 8 }} />
          <Typography variant="h6" component="div" fontWeight="bold">
            {name}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FaPhone style={{ marginRight: 8 }} />
          <Typography variant="body2" color="text.secondary">
            {number}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ display: "flex", gap: 2, padding: 2 }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleDelete}
          sx={{ backgroundColor: "#1976d2", color: "#fff" }}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => setIsEditFormOpen(true)}
          sx={{ backgroundColor: "#1976d2", color: "#fff" }}
        >
          Edit
        </Button>
      </CardActions>

      <Dialog
        open={isDeleteModalOpen}
        onClose={closeDeleteModal}
        sx={{
          "& .MuiDialog-paper": {
            display: "flex",
            alignItems: "left",
            justifyContent: "left",
            padding: 2,
            maxWidth: "400px", 
            margin: "auto", 
          },
        }}
      >
        <DialogTitle>Are you sure you want to delete {name}?</DialogTitle>
        <DialogActions
          sx={{ display: "flex", gap: 2 }}
        >
          <Button onClick={confirmDelete} color="error" variant="contained">
            Yes
          </Button>
          <Button
            onClick={closeDeleteModal}
            color="primary"
            variant="contained"
          >
            No
          </Button>
        </DialogActions>
      </Dialog>

     
      {isEditFormOpen && (
        <ContactEditForm
          id={id}
          name={name}
          number={number}
          onCancel={() => setIsEditFormOpen(false)}
          isOpen={isEditFormOpen}
          onRequestClose={() => setIsEditFormOpen(false)}
        />
      )}
    </Card>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
