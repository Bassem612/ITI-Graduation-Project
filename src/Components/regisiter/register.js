import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { register } from "../../store/actions/auth";


const Register = () => {

  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch()

  const validate = Yup.object({
    username: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .min(5, 'must be more than 5')
      .matches(/^[A-Z][a-z0-9_-]{3,19}$/, "must start with capital letter")
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 charaters')
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Contain One Uppercase, lowercase, Number, Special Char"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  const handleRegister = (e) => {
    setSuccessful(false);
    console.log(e.username)
    dispatch(register(e.username, e.email, e.password))
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={validate}
        onSubmit={handleRegister}
      >
        {formik => (
          <div>
            <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
            <Form>
              <TextField label="User Name" name="username" type="text" />

              <TextField label="Email" name="email" type="email" />
              <TextField label="password" name="password" type="password" />
              <TextField label="Confirm Password" name="confirmPassword" type="password" />
              <button className="btn btn-success mt-3 me-3 btnn" type="submit" disabled={!formik.isValid}>Register</button>
              <button className="btn btn-danger mt-3 " type="reset">Reset</button>
            </Form>
          </div>
        )}
      </Formik>

      {message && (
        <div className="form-group">
          <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
            {message}
          </div>
        </div>
      )}
    </>
  )
}
export default Register
