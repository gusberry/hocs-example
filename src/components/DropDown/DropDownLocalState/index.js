import flow from 'lodash/flow';
import Component from '../Component';

import LocalStateHoc from '../../../HOCs/localStateDataSourceWithFetchHOC';
import fetchData from '../../../HOCs/fetchDataHoc';

const WrappedComponent = flow([fetchData, LocalStateHoc])(Component);

export default WrappedComponent;
