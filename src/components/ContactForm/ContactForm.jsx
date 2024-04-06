
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({onAddContact}) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAddContact(values.name, values.number);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form className={css.form}>
        <div className={css.fieldname}>
          <label htmlFor={nameFieldId} className={css.labelname} > <IoPerson />Name</label>
          <Field type="text" name="name" id={nameFieldId}  className={css.inputname}/>
          <ErrorMessage name="name" as="span" />
        </div>

        <div>
          <label htmlFor={numberFieldId}  className={css.labelnumber}> <FaPhone />Number</label>
          <Field type="text" name="number" id={numberFieldId} className={css.inputnumber} />
          <ErrorMessage name="number" as="span" />
        </div>
        <button type="submit" className={css.btnaddcontact}>Add contact</button>
      </Form>
    </Formik>
  );
};
ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired, 
  };

export default ContactForm;
