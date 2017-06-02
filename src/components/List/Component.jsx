import React from 'react';
import PropTypes from 'prop-types';

const List = ({ dataSource }) => (
  <table>
    <thead>
      <tr>
        <th>Label</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      {dataSource.map(({ value, label }) => (
        <tr key={value}>
          <td>{label}</td><td>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

List.displayName = 'List';

List.propTypes = {
  dataSource: PropTypes.array.isRequired,
};

export default List;
