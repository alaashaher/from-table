import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({});
    let jesonValue =[{name:'',counatary:''}];
  const handleSubmit = (event) => {
    event.preventDefault();
    jesonValue.push(values);
    console.log(jesonValue);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  }
};

export default useForm;