import React, { Component, Fragment } from 'react';
import { connect } from 'umi';

class ControlCenter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <h1>Page ControlCenter</h1>
      </Fragment>
    );
  }
}

export default connect()(ControlCenter);
