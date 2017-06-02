import flow from 'lodash/flow';
import Component from '../Component';

import { getComponentStateById } from '../../../reducers';

import ReduxStateHoc from '../../../HOCs/reduxDataSourceHOC';

const WrappedComponent = flow([ReduxStateHoc(getComponentStateById)])(
  Component,
);

export default WrappedComponent;
