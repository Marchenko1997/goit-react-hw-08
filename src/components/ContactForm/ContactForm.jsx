import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { addContactAsync } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { useId } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TextField, Button, Box, Typography } from "@mui/material";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "User name must be at least 3 characters long!")
    .max(50, "User name must be less than 50 characters long!")
    .required("Please, enter your name! This field is required!"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Please, enter your phone number! This field is required!"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    if (!name || !number) {
      alert("Name and number cannot be empty. Enter some text!");
      return;
    }

    dispatch(addContactAsync({ name, number }))
      .then(() => {
        toast.success("Contact added successfully.");
        resetForm();
      })
      .catch(() => {
        toast.error("Failed to add contact. Please try again later.");
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ errors, touched, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 400,
          
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              fontWeight="bold"
              textAlign="center"
              gutterBottom
            >
              Add New Contact
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IoPerson style={{ marginRight: 8 }} />
              <Field
                as={TextField}
                fullWidth
                id={nameFieldId}
                name="name"
                label="Name"
                placeholder="Enter your name"
                error={Boolean(errors.name && touched.name)}
                helperText={<ErrorMessage name="name" />}
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FaPhone style={{ marginRight: 8 }} />
              <Field
                as={TextField}
                fullWidth
                id={numberFieldId}
                name="number"
                label="Number"
                placeholder="Enter your number"
                error={Boolean(errors.number && touched.number)}
                helperText={<ErrorMessage name="number" />}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              fullWidth
              sx={{ mt: 2 , width: 200, marginLeft: 4}}
            >
              Add Contact
            </Button>
          </Box>

          <Toaster />
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
