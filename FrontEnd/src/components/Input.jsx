import React from 'react';
import './Input.css';

const Input = ({ 
  label, 
  id, 
  type = 'text', 
  error, 
  className = '', 
  placeholder,
  required = false,
  ...props 
}) => {
  return (
    <div className={`input-group ${className}`}>
      {label && (
        <label htmlFor={id} className="input-group__label">
          {label} {required && <span className="input-group__required">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`input-group__field ${error ? 'input-group__field--error' : ''}`}
        {...props}
      />
      {error && <span className="input-group__error"><span>⚠️</span> {error}</span>}
    </div>
  );
};

export default Input;
