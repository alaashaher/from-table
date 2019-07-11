import React, { useState } from 'react';
import './index.css'

const Form = () => {
  const [rows, setRows] = useState([{}]);
  const handleChange = index => e => {
    const { name, value } = e.target;
    // const rows = [...rows];
    rows[index] = {
      [name]: value
    };
    setRows(rows);
    console.log(rows);
  };
  const handleAddRow = () => {
    const item = {
      name: "",
      select: ""
    };
    setRows([...rows, item]);
    console.log(rows);
  };
  const handleRemoveRow = () => {
    setRows(rows.slice(0, -1));
    console.log(rows);
  };
  return (
    <div>
      <table>
        <tbody>
          {rows.map((item, index) => (
            <tr id="addr" key={index}>
              <td>{index}</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={rows[index].name}
                  onChange={handleChange(index)}
                />
              </td>
              <td>
                <select onChange={handleChange(index)} value={rows[index].select} name="select">
                  <option value="egypt">egypt</option>
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                  <option value="Dubi">Dubi</option>
                </select>
              </td>
              <td>
                <button color="danger" onClick={handleRemoveRow}>
                  Delete
            </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

export default Form;