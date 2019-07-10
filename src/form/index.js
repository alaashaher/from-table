import React, { useState } from 'react';
import './index.css'
const Form = () => {
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
  function login() {
    console.log(values);
  }

  // const [rows, setRows] = useState([{}]);
  // const handleRemoveRow = () => {
  //     setRows(rows.slice(0, -1));
  // };

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column">
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="name" name="name" required onChange={handleChange} value={values.name} />
                </div>
              </div>
              <div className="field">
                <label className="label">countary</label>
                <div className="control">
                  <select onChange={handleChange} value={values.select} name="select">
                    <option value="egypt">egypt</option>
                    <option value="US">US</option>
                    <option value="UK">UK</option>
                    <option value="Dubi">Dubi</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-dark submit">Add Row</button>
            </form>
            <p>user name is: {values.name}<br></br>  user countary is: {values.select}</p>
          </div>
          <table id='students'>
            <tbody>
              <tr>
                <td >{values.name}</td>
                <td >{values.select}</td>
                <td>
                  <button type="" className="btn">Delete Row</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Form;