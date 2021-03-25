import React from 'react'
import RoundTemp from './RoundTemp'
import './Table.css'
import PropTypes from 'prop-types'

const TableCreator = ({ name, data}) => {
  return ( 
    <>
      <thead>
        <tr>
          <th className="table-header">{name}</th>
        </tr>
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

TableCreator.propTypes = {
  data: PropTypes.object,
  name: PropTypes.string
}

export default TableCreator;