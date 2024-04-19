import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { IoPersonAdd } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import css from './RegisterForm.module.css';


const initialValues = {
  name: '',
  email: '',
  password: ''
};

const validationSchema = Yup.object({
  name: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(7, 'Password must be at least 7 characters').required('Password is required')
});
export const RegisterForm = () => {
  const dispatch = useDispatch();


  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name" ><IoPersonAdd /> Username</label>
        <Field type="text" id="name" name="name" className={css.input} />
        <ErrorMessage name="name" component="div" className={css.error} />

        <label className={css.label} htmlFor="email" ><MdEmail />Email</label>
        <Field type="email" id="email" name="email" className={css.input} />
        <ErrorMessage name="email" component="div" className={css.error} />

        <label className={css.label} htmlFor="password" ><RiLockPasswordFill />Password</label>
        <Field type="password" id="password" name="password" className={css.input} />
        <ErrorMessage name="password" component="div" className={css.error} />

        <button type="submit" className={css.btn}>Register</button>
      </Form>
    </Formik>
  );
};

