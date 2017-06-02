import React, { Component } from 'react';

import { getData } from '../services/apiService';
import { getDisplayName } from '../services/helpers';

const localStateDataSourceWithFetchHOC = WrappedComponent =>
  class extends Component {
    static displayName = `LocalStateDataSourceWithFetchHOC(${getDisplayName(WrappedComponent)})`;

    state = {
      dataSource: [],
    };

    getData = url =>
      getData(url).then(data => {
        this.setState(() => ({
          dataSource: data,
        }));
      });

    render() {
      return (
        <WrappedComponent
          {...this.props}
          dataSource={this.state.dataSource}
          getData={this.getData}
        />
      );
    }
  };

export default localStateDataSourceWithFetchHOC;
