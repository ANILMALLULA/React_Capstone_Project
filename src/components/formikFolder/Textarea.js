import React from "react";
import { Field, ErrorMessage } from "formik";

const Textarea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px",
      }}
    >
      <label htmlFor={name} style={{ fontWeight: "bold", fontSize: "18px" }}>
        {label}:
      </label>
      <Field
        id={name}
        name={name}
        {...rest}
        style={{
          fontSize: "15px",
          marginBottom: "10px",
          borderRadius: "9px",
          border: "1px solid #ccc",
          padding: "7px",
          width: "70%",
          height: "200px",
        }}
        placeholder={`Type ${label} here...`}
        as='textarea'
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

export default Textarea;
