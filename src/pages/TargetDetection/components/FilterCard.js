import React, { Component } from 'react';
import { Select, Space, Button, Input } from 'antd';
import styles from './filtercard.less';

const { Option } = Select;
const { Search } = Input;

class FilterCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Space size="middle">
        <Select defaultValue="all">
          <Option value="all">全部字段</Option>
          <Option value="ip">IP字段</Option>
          <Option value="url">URL字段</Option>
        </Select>
        <Search placeholder="input search text" style={{ width: 200 }} />
        <span className={styles.spanfont}>端口</span>
        <Select placeholder="请选择" style={{ width: '10vw' }}>
          <Option value="all">全选</Option>
          <Option value="port22">22</Option>
          <Option value="port443">443</Option>
        </Select>
        <span className={styles.spanfont}>操作系统</span>
        <Select placeholder="请选择" style={{ width: '10vw' }}>
          <Option value="all">全选</Option>
          <Option value="linux">Linux</Option>
          <Option value="windows">Windows</Option>
        </Select>
        <span className={styles.spanfont}>设备类型</span>
        <Select placeholder="请选择" style={{ width: '10vw' }}>
          <Option value="all">全部</Option>
          <Option value="route">路由设备</Option>
          <Option value="cloud">云服务设备</Option>
        </Select>
        <Button type="primary">查询</Button>
        <Button>重置</Button>
      </Space>
    );
  }
}

export default FilterCard;
