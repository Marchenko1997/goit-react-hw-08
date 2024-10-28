import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { IoPersonAdd } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { TextField, Button, Box, Typography } from "@mui/material";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
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
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
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
              Register
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IoPersonAdd size={24} />
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Username"
                variant="outlined"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
              />
            </Box>

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
              Register
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
