import React, { Component } from 'react';
import { Button, Row, Col, Space } from 'antd';
import './header.less';
import {
  BellOutlined,
  CommentOutlined,
  DesktopOutlined,
  UserOutlined,
  DownSquareOutlined,
} from '@ant-design/icons';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Row align="middle" style={{ height: '10vh' }}>
          <Col span={4}>
            <span style={{ fontSize: '2em' }}>WebRay</span>
          </Col>
          <Col span={10}></Col>
          <Col span={10}>
            <Space
              style={{ fontSize: '1.7em', color: '#1890ff' }}
              size={'large'}
            >
              <DownSquareOutlined />
              <span>任务创建</span>
              <span>已完成任务/总任务: </span>
              <span>3/10</span>
              <Button type="primary">全部单位</Button>
              <BellOutlined />
              <CommentOutlined />
              <DesktopOutlined />
              <UserOutlined />
            </Space>
          </Col>
        </Row>
      </>
    );
    // return (
    //   <div className="container">
    //     <div className="logo">WebRay</div>
    //     <div className="middle"></div>
    //     <div className="right">
    //       <Button type="primary">创建任务</Button>
    //       <span className="icon">完成任务/总任务:</span>
    //       <span className="icon">3/10</span>
    //       <Button type="primary">全部单位</Button>
    //       <BellOutlined className="icon" />
    //       <CommentOutlined className="icon" />
    //       <DesktopOutlined className="icon" />
    //       <UserOutlined className="icon" />
    //     </div>
    //   </div>
    // );
  }
}

export default Header;
