import { connect } from 'react-redux';
import { fetchDataForSpecificId } from '../actions/api';

const mapFetchDataToProps = (dispatch, ownProps) => {
  if (!ownProps.componentId) {
    throw Error('componentId was not specified in props for fetchDataHOC') 
  }

  return {
    getData: fetchDataForSpecificId(ownProps.componentId),
  };
}

export default (WrappedComponent) =>
  connect(null, mapFetchDataToProps)(WrappedComponent);