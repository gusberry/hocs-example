import { connect } from 'react-redux';

const mapStateToProps = dataSourceSelector => (state, ownProps) => {
  if (!ownProps.componentId) {
    throw Error(
      'componentId was not specified in props for reduxDataSourceHOC',
    );
  }

  return {
    dataSource: dataSourceSelector(state, ownProps.componentId),
  };
};

export default stateSelector => WrappedComponent =>
  connect(mapStateToProps(stateSelector), null)(WrappedComponent);
