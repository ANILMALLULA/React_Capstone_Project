import React from "react";
import { Field, ErrorMessage } from "formik";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px",
      }}
    >
      <label htmlFor={name} style={{ fontWeight: "bold", fontSize: "16px" }}>
        {label}:
      </label>
      <Field
        id={name}
        name={name}
        {...rest}
        style={{
          fontSize: "14px",
          marginBottom: "10px",
          borderRadius: "9px",
          border: "1px solid #ccc",
          padding: "7px",
          width: "350px",
          height: "45px",
        }}
        placeholder={`Type ${label} here...`}
      />
      <ErrorMessage name={name}>
        {(msg) => (
          <div style={{ color: "red", fontWeight: "bold", fontSize: "13px" }}>
            {msg}*
          </div>
        )}
      </ErrorMessage>
    </div>
  );
};

export default Input;
