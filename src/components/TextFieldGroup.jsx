import React from 'react';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  type,
  onChange,
  required,
  disabled,
}) => (
  <div className="form-group">
    <input
      type={type}
      className="form-control form-control-lg"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
  </div>
);
TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  required: PropTypes.bool,
};

TextFieldGroup.defaultProps = {
  type: 'text',
};

export default TextFieldGroup;
