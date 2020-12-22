import React, { Component } from 'react';
import { Card, Tabs, Row, Col } from 'antd';
import styles from './GenCard.less';

const { TabPane } = Tabs;
class LinkMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card style={{ width: '100%' }} className={styles.cardSpace}>
        <Row>
          <Col span={6}>
            <Tabs defaultActiveKey="1" size="large">
              <TabPane
                tab={this.props.menu}
                key="1"
                style={{ fontSize: '2em' }}
              ></TabPane>
            </Tabs>
          </Col>
          <Col span={6}></Col>
          <Col span={9}></Col>
          <Col span={3}></Col>
        </Row>
      </Card>
    );
  }
}

export default LinkMenu;
