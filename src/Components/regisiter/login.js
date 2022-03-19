import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { login } from "../../store/actions/auth";

 const Login = (props) => {

  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();
  
  const validate = Yup.object({

    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    // password: Yup.string()
    //   .min(6, 'Password must be at least 6 charaters')
    //   .required('Password is required'),
   
  })

  const handleLogin = (e) => {
    setLoading(true);
      dispatch(login(e.email, e.password))
        .then(() => {
          props.history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
  };
  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }
  return (
    <>
    <Formik
      initialValues={{
         
        email: '',
        password: '',
     
      }}
      validationSchema={validate}
      onSubmit={handleLogin}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Login</h1>
          <Form>
          

            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
           
            <button className="btn btn-success mt-3 me-3 btnn" type="submit" disabled={!formik.isValid}>login</button>
            {/* <button className="btn btn-danger mt-3 " type="reset">Reset</button> */}
          </Form>
        </div>
      )}
    </Formik>

    {message && (
      <div className="form-group">
        <div className="alert alert-danger" role="alert">
          {message}
        </div>
      </div>
      )}
    </>
  )
}
export default Login
