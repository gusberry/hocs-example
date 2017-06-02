import flow from 'lodash/flow';
import Component from '../Component';

import { getComponentStateById } from '../../../reducers';

import ReduxStateHoc from '../../../HOCs/reduxDataSourceHOC';
import fetchData from '../../../HOCs/fetchDataHoc';
import fetchActionHOC from '../../../HOCs/reduxFetchDataHOC';

const WrappedComponent = flow([
  fetchData,
  fetchActionHOC,
  ReduxStateHoc(getComponentStateById),
])(Component);

export default WrappedComponent;
