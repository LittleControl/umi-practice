import React, { Component, Fragment } from 'react';
import { Tabs } from 'antd';

class LinkMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { TabPane } = Tabs;

    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="控制中心" key="1"></TabPane>
      </Tabs>
    );
  }
}

export default LinkMenu;
