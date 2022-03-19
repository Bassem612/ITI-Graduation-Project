import React from 'react';
import { ErrorMessage, useField } from 'formik';
import "./textfield.css";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label  className='label'           htmlFor={field.name}>{label}  </label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      {/* <ErrorMessage component="div" name={field.name} className="error" /> */}
            <ErrorMessage component="div" name={field.name} className="error" />

 </div>
  )
}