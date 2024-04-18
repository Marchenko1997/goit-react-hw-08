import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import css from "./LogInForm.module.css";

const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required(), 
  password: Yup.string().min(7, "Too Short!").max(16, "Too Long!").required(), 
});

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div>
            <label className={css.label}>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>
          <div>
            <label className={css.label}>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className={css.error} />
          </div>
          <button type="submit" disabled={isSubmitting}>Log In</button>
        </Form>
      )}
    </Formik>
  );
};
