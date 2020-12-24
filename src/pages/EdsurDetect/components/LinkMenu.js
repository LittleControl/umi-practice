import React, { Component } from 'react';
import { Tabs, Button, Row, Col, Space, Card } from 'antd';

const { TabPane } = Tabs;
class LinkMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card style={{ width: '100%' }}>
        <Row>
          <Col span={6}>
            <Tabs defaultActiveKey="1" size="large">
              <TabPane
                tab="渗透利用"
                key="1"
                style={{ fontSize: '2em' }}
              ></TabPane>
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
      </Card>
    );
  }
}

export default LinkMenu;
