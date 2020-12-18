import React, { Component } from 'react';
import { Tabs, Button, Row, Col, Space } from 'antd';

class LinkMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { TabPane } = Tabs;
    return (
      <Row>
        <Col span={6}>
          <Tabs defaultActiveKey="1" size="large">
            <TabPane tab="事件调查" key="1"></TabPane>
          </Tabs>
        </Col>
        <Col span={6}></Col>
        <Col span={9}></Col>
        <Col span={3}>
          <Space align="center" style={{ height: '100%' }}>
            <Button type="primary" ghost>
              刷新
            </Button>
            <Button danger ghost>
              删除
            </Button>
          </Space>
        </Col>
      </Row>
    );
  }
}

export default LinkMenu;
