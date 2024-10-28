import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { TextField, Button, Box, Typography } from "@mui/material";

const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
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
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
      }) => (
        <Form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              maxWidth: 400,
              mx: "auto",
           
            }}
          >
            <Typography
              variant="h5"
              component="h1"
              align="center"
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              Log In
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <MdEmail size={24} />
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <RiLockPasswordFill size={24} />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
              sx={{
                mt: 1,
                borderRadius: 2,
                py: 1.5,
                fontWeight: "bold",
                textTransform: "none",
                width: 300,
                marginLeft: 4,
              }}
            >
              Log In
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
