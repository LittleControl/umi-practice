import React, { Component } from 'react';
import { Button, Avatar } from 'antd';
import './header.less';
import {
  BellOutlined,
  CommentOutlined,
  DesktopOutlined,
  UserOutlined,
} from '@ant-design/icons';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="logo">WebRay</div>
        <div className="middle"></div>
        <div className="right">
          <Button type="primary">创建任务</Button>
          <span className="icon">完成任务/总任务:</span>
          <span className="icon">3/10</span>
          <Button type="primary">全部单位</Button>
          <BellOutlined className="icon" />
          <CommentOutlined className="icon" />
          <DesktopOutlined className="icon" />
          <UserOutlined className="icon" />
        </div>
      </div>
    );
  }
}

export default Header;
