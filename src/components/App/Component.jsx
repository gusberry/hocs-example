import React, { Component } from 'react';
import DDLocal from '../DropDown/DropDownLocalState';
import DDRedux from '../DropDown/DropDownReduxState';
import ListRedux from '../List/ListReduxState';

const dataSourceUrl = '/options.json';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          with local state
          <br />
          <DDLocal url={dataSourceUrl} />
        </div>
        <hr />
        <div>
          with redux state
          <br />
          <DDRedux url={dataSourceUrl} componentId="secondDD" />
        </div>
        <hr />
        <div>
          with the same redux state
          <br />
          <ListRedux componentId="secondDD" />
        </div>
      </div>
    );
  }
}

export default App;
