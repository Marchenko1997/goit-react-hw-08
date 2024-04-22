// ContactEditForm.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactEditForm.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { updateContactAsync } from "../../redux/contacts/operations";
import PropTypes from 'prop-types';
import toast, { Toaster } from "react-hot-toast";

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

const ContactEditForm = ({ id, name, number, onCancel }) => {
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
    <Formik
      initialValues={{ name, number }}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
      validationSchema={FeedbackSchema}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.fieldname}>
            <label htmlFor="name" className={css.labelname}>
              {" "}
              <IoPerson />
              Name
            </label>
            <Field
              type="text"
              name="name"
              autoComplete="name"
              className={css.inputname}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          <div>
            <label htmlFor="number" className={css.labelnumber}>
              {" "}
              <FaPhone />
              Number
            </label>
            <Field
              type="text"
              name="number"
              autoComplete="tel"
              className={css.inputnumber}
            />
            <ErrorMessage name="number" component="div" className={css.error} />
          </div>
          <button
            type="submit"
            className={css.btnaddcontact}
            disabled={isSubmitting}
          >
            Update contact
          </button>

          <button type="button" onClick={onCancel} className={css.btncancel}>
            Cancel
          </button>

          <Toaster />
        </Form>
      )}
    </Formik>
  );
};



export default ContactEditForm;

ContactEditForm.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
  };