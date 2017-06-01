import { connect } from 'react-redux';

const mapStateToProps = (state, dataSourceSelector) => ({
  dataSource: dataSourceSelector(state),
});

export default (stateSelector) => (WrappedComponent) =>
  connect(mapStateToProps)(WrappedComponent);