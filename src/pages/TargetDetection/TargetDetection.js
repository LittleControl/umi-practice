import React, { Component, Fragment } from 'react';
import { connect } from 'umi';
import { Space } from 'antd';
import GenCard from '@/components/GenCard';
import LinkMenu from './components/LinkMenu';
import FilterCard from './components/FilterCard';
import TableCard from './components/TableCard';

class TargetDetection extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {
      dispatch,
      location: { pathname },
    } = this.props;
    if (pathname === '/targetdetection') {
      dispatch({
        type: 'targetdetection/query',
      });
    }
  }
  render() {
    const { tableData } = this.props.targetdetection;
    return (
      <Fragment>
        <Space direction="vertical" style={{ width: '100%' }}>
          <GenCard component={LinkMenu} />
          <GenCard component={FilterCard} />
          <GenCard component={TableCard} data={tableData} />
        </Space>
      </Fragment>
    );
  }
}

export default connect(({ targetdetection }) => ({ targetdetection }))(
  TargetDetection,
);
