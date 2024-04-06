
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
// import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { addContact } from '../../redux/contactsSlice';
import { useDispatch} from 'react-redux';
import { nanoid } from "nanoid";
import { useState } from 'react';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, 'User name must be at least 3 characters long!').max(50, 'User name must be less 50 characters long!').required('Please, enter your name! This field is required!'),
  number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Please, enter your phone number! This field is required!'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [ number, setNumber] = useState('');

  const handleSubmit = (e, {resetForm}) => {
   e.preventDefault();
   if(!name || !number ) return ;
   dispatch(addContact({ id: nanoid(), name, number }));
   setName('');
   setNumber('');
   resetForm();

  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form className={css.form}>
        <div className={css.fieldname}>
          <label htmlFor={nameFieldId} className={css.labelname} > <IoPerson />Name</label>
          <Field type="text" name="name" id={nameFieldId}  className={css.inputname}/>
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div>
          <label htmlFor={numberFieldId}  className={css.labelnumber}> <FaPhone />Number</label>
          <Field type="text" name="number" id={numberFieldId} className={css.inputnumber} />
          <ErrorMessage name="number"component="div" className={css.error}/>
        </div>
        <button type="submit" className={css.btnaddcontact}>Add contact</button>
      </Form>
    </Formik>
  );
};
// ContactForm.propTypes = {
//     onAddContact: PropTypes.func.isRequired, 
//   };

export default ContactForm;
