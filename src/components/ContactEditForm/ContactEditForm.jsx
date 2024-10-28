
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateContactAsync } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import PropTypes from 'prop-types';

import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  IconButton,
  Box,
} from "@mui/material";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters long")
      .max(50, "Name must be less than 50 characters long")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Number must be at least 3 characters long")
      .max(50, "Number must be less than 50 characters long")
      .required("Number is required"),
});

const ContactEditForm = ({ id, name, number, onCancel, isOpen, onRequestClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      await FeedbackSchema.validate(values);
      await dispatch(updateContactAsync({ id, ...values }));
      toast.success("Contact updated successfully.");
      actions.resetForm();
      onCancel();
    } catch (error) {
      toast.error("Failed to update contact. Please try again later.");
    }
  };

  return (
    <Dialog open={isOpen} onClose={onRequestClose} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Edit Contact
        <IconButton
          onClick={onCancel}
          color="error"
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <IoMdCloseCircleOutline />
        </IconButton>
      </DialogTitle>
      <Formik
        initialValues={{ name, number }}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
        validationSchema={FeedbackSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <DialogContent sx={{ padding: 3 }}>
              <Box sx={{ mb: 2 }}>
                <Field
                  as={TextField}
                  name="name"
                  label="Name"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  InputProps={{
                    startAdornment: <IoPerson style={{ marginRight: 8 }} />,
                  }}
                  helperText={<ErrorMessage name="name" />}
                  error={Boolean(ErrorMessage.name)}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Field
                  as={TextField}
                  name="number"
                  label="Number"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  InputProps={{
                    startAdornment: <FaPhone style={{ marginRight: 8 }} />,
                  }}
                  helperText={<ErrorMessage name="number" />}
                  error={Boolean(ErrorMessage.number)}
                />
              </Box>
            </DialogContent>
            <DialogActions sx={{ padding: 2 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                Update contact
              </Button>
              <Button onClick={onCancel} variant="outlined" color="error">
                Cancel
              </Button>
            </DialogActions>
            <Toaster />
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

ContactEditForm.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
};

export default ContactEditForm;
