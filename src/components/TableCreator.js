import React from 'react'
import RoundTemp from './RoundTemp'
import './Table.css'

const TableCreator = ({ name, data}) => {
  return ( 
    <>
      <thead>
        <th className="table-header">{name}</th>
      </thead>
      <tbody>
        <tr className="table-row">
          <td className="table-data">Утром:</td>
          <td><RoundTemp temp={data.morn} /></td>
        </tr>
        <tr className="table-row">
          <td className="table-data">Днем:</td>
          <td><RoundTemp temp={data.day} /></td>
        </tr>
        <tr className="table-row">
          <td className="table-data">Вечером:</td>
          <td><RoundTemp temp={data.eve} /></td>
        </tr>
        <tr className="table-row">
          <td className="table-data">Ночью:</td>
          <td><RoundTemp temp={data.night} /></td>
        </tr>
      </tbody>
    </>
   );
}
 
export default TableCreator;