import React from "react";
import "./Form-input.style.scss";

const FormInput = ({ label, handleChange, ...Props }) => (
  <div className="group">
    <input className='form-input' onChange={handleChange} {...Props} />
    {label ? (
      <label className={`${Props.value.length ? "shrink" : ""} form-input-label `}>
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
