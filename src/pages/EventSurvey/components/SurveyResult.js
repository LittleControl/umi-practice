import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'umi';

const columns = [
  { title: '目标', dataIndex: 'ip' },
  { title: '端口', dataIndex: 'port' },
  { title: '操作系统', dataIndex: 'os' },
  {
    title: '结果',
    dataIndex: 'operate',
    render: value => {
      const obj = {
        children: <a>{value}</a>,
        props: [],
      };
      return obj;
    },
  },
];
const table_data = [
  { id: 'i1', ip: '127.0.0.1', port: 22, os: 'Linux', operate: '详情' },
  { id: 'i2', ip: '127.0.0.1', port: 22, os: 'Linux', operate: '详情' },
  { id: 'i3', ip: '127.0.0.1', port: 22, os: 'Linux', operate: '详情' },
  { id: 'i4', ip: '127.0.0.1', port: 22, os: 'Linux', operate: '详情' },
];
class SurvetResult extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Table columns={columns} dataSource={table_data} rowKey="id" />
      </div>
    );
  }
}

export default SurvetResult;
