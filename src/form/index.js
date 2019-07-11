import React, { useState } from 'react';
import './index.css'
import { Table, Button, Input } from "reactstrap";

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
      <Table>
        <tbody>
          {rows.map((item, index) => (
            <tr id="addr" key={index}>
              <td>{index}</td>
              <td>
                <Input
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
                <Button color="danger" onClick={handleRemoveRow}>
                  Delete Last Row
            </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={handleAddRow}>Add Row</Button>

    </div>
  );
};

export default Form;