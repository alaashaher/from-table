import React, { useState } from 'react';
import './index.css'
import useForm from "./useForm";
const Form = () => {
  const { values, handleChange, handleSubmit } = useForm(login);
  function login() {
    console.log(values);
  }

  const [rows, setRows] = useState([{}]);
  const handleRemoveRow = () => {
      setRows(rows.slice(0, -1));
  };

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
                  <button type="" className="btn" onClick={handleRemoveRow}>Delete Row</button>
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