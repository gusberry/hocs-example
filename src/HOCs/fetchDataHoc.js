import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import { getDisplayName } from '../services/helpers';

const externalDataSourceHoc = WrappedComponent =>

  class extends Component {
    static displayName = `ExternalDataSourceHoc(${getDisplayName(WrappedComponent)})`

    static propTypes = {
      url: PropTypes.string.isRequired,
      getData: PropTypes.func.isRequired,
    }

    componentWillMount() {
      this.getData();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.url !== this.props.url) {
        this.getData(nextProps.url);
      }
    }

    getData = () => this.props.getData && this.props.getData(this.props.url)

    render() {
      const filteredProps = omit(this.props, ['url', 'fetchDataFromServer']);

      return (
        <WrappedComponent {...filteredProps} />
      );
    }
  }

export default externalDataSourceHoc;