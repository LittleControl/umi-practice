import React, { Component } from 'react';
import { Tabs } from 'antd';

class LinkMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { TabPane } = Tabs;

    return (
      <Tabs defaultActiveKey="1" size="large">
        <TabPane tab="控制中心" key="1" style={{ fontSize: '2em' }}></TabPane>
      </Tabs>
    );
  }
}

export default LinkMenu;
