import { useState } from 'react';

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validationField = (name, value) => {

    if (name === 'name') {
      const re = /^[a-zA-Zа-яА-я/ /-]+$/;
      if (!re.test(value)) {
        setErrors({...errors, [name]: 'Имя может содержать только латиницу, кириллицу, пробел или дефис' })
        setIsValid(false)
      }
    }

    if (name === 'email') {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(value).toLowerCase())) {
        setErrors({...errors, [name]: 'Невалидный адрес электронной почты' })
        setIsValid(false)
      }
    }
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    validationField(name, value);
    setIsValid(target.closest("form").checkValidity());
  };

  return { values, handleInputChange, errors, isValid };
}
