import React, { Component } from 'react';
import { Card, Divider, Button, Tabs, Row, Col, Input } from 'antd';
import {
  InfoCircleOutlined,
  SettingOutlined,
  BookOutlined,
  DownOutlined,
  QrcodeOutlined,
} from '@ant-design/icons';

const { TabPane } = Tabs;

class AccountManage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const OperationsSlot = {
      right: (
        <Button type="text">
          <SettingOutlined />
        </Button>
      ),
    };
    const tabTitle = (
      <span>
        <InfoCircleOutlined />
        帐号管理
      </span>
    );
    return (
      <span>
        <Card>
          <Tabs
            defaultActiveKey="1"
            type="card"
            tabBarExtraContent={OperationsSlot}
          >
            <TabPane tab={tabTitle} key="1">
              <Row align="middle" gutter={(24, 24)}>
                <Col span={4}>
                  <BookOutlined />
                  <span>修改密码</span>
                </Col>
                <Col span={19}></Col>
                <Col span={1} style={{ textAlign: 'center' }}>
                  <DownOutlined />
                </Col>
              </Row>
              <Divider />
              <Row align="middle" gutter={(24, 24)}>
                <Col span={2}>旧密码</Col>
                <Col span={8}>
                  <Input.Password />
                </Col>
                <Col span={13}>
                  <span style={{ color: 'red' }}>*</span>请输入旧密码
                </Col>
              </Row>
              <br />
              <Row align="middle" gutter={(24, 24)}>
                <Col span={2}>新密码</Col>
                <Col span={8}>
                  <Input.Password />
                </Col>
                <Col span={13}>
                  <span style={{ color: 'red' }}>*</span>
                  密码要求: [字母,数字, 长度大于等于6,小于等于32的组合]. 示例:
                  nothing12
                </Col>
              </Row>
              <br />
              <Row align="middle" gutter={(24, 24)}>
                <Col span={2}>确认新密码</Col>
                <Col span={8}>
                  <Input.Password />
                </Col>
                <Col span={13}>
                  <span style={{ color: 'red' }}>*</span>
                  密码要求: [必须与新密码一致]
                </Col>
              </Row>
              <br />
              <Row align="middle" gutter={(24, 24)}>
                <Col span={2}>验证码</Col>
                <Col span={8}>
                  <Input />
                </Col>
                <Col span={13}>
                  <QrcodeOutlined style={{ fontSize: '1.5em' }} />
                </Col>
              </Row>
              <br />
              <Button type="primary">提交</Button>
            </TabPane>
          </Tabs>
        </Card>
      </span>
    );
  }
}

export default AccountManage;
