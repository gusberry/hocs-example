import React from 'react';
import PropTypes from 'prop-types';

const DropDown = ({ dataSource, ...rest }) => (
  <select>
    {dataSource.map(({ label, value }) => (
      <option key={value} value={value}>{label}</option>
    ))}
  </select>
);

DropDown.displayName = 'DropDown';

DropDown.propTypes = {
  dataSource: PropTypes.array.isRequired,
};

export default DropDown;
