import React, { Component, Fragment } from 'react';
import { connect } from 'umi';
import { Space } from 'antd';
import GenCard from '../../components/GenCard';
import LinkMenu from './components/LinkMenu';
import Tags from './components/Tags';
import Asset from './components/Asset';
import MidCard from './components/MidCard';
import FilterCard from './components/FilterCard';
import AppCard from './components/AppCard';

class ControlCenter extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {
      dispatch,
      location: { pathname },
    } = this.props;
    if (pathname === '/controlcenter') {
      dispatch({
        type: 'controlcenter/query',
      });
    }
  }
  render() {
    // console.log(this.props.controlcenter)
    return (
      <Fragment>
        <Space direction="vertical" style={{ width: '100%' }}>
          <GenCard component={LinkMenu} />
          <GenCard component={Tags} />
          <GenCard component={Asset} />
          <GenCard component={MidCard} />
          <GenCard component={FilterCard} />
          <GenCard component={AppCard} />
        </Space>
      </Fragment>
    );
  }
}

// export default ControlCenter;

export default connect(({ controlcenter }) => ({ controlcenter }))(
  ControlCenter,
);
