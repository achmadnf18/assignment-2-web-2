/* eslint-disable jsx-a11y/anchor-is-valid */
import { Icon } from '@iconify/react';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'store/auth/slice';
import * as Yup from 'yup';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Provide a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: (data) => {
      dispatch(login(data));
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email Address"
              {...getFieldProps('email')}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              {...getFieldProps('password')}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                      {showPassword ? (
                        <Icon icon="eva:eye-fill" />
                      ) : (
                        <Icon icon="eva:eye-off-fill" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              <FormControlLabel
                control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
                label="Remember me"
              />

              <Link variant="subtitle2" underline="hover">
                Forgot password?
              </Link>
            </Stack>

            <LoadingButton fullWidth size="large" type="submit" loading={isSubmitting}>
              {isSubmitting ? 'loading...' : 'Login'}
            </LoadingButton>
          </Box>
        </Box>
      </Form>
    </FormikProvider>
  );
}

export default LoginForm;
