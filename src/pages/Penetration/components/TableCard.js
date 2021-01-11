import React, { Component } from 'react';
import { Table, Button, Space, List } from 'antd';

const renderFun = value => {
  const listRender = value => {
    let res = (
      <List.Item>
        <Space>
          <Button type="primary" danger>
            高风险
          </Button>
          <span style={{ color: 'red' }}>{value.text}</span>
        </Space>
      </List.Item>
    );
    if (value.risk_level + '' === '2') {
      res = (
        <List.Item>
          <Space>
            <Button danger>中风险</Button>
            <span style={{ color: 'orange' }}>{value.text}</span>
          </Space>
        </List.Item>
      );
    }
    if (value.risk_level + '' === '3') {
      res = (
        <List.Item>
          <Space>
            <Button type="dashed" danger>
              低风险
            </Button>
            <span style={{ color: 'blue' }}>{value.text}</span>
          </Space>
        </List.Item>
      );
    }
    return res;
  };
  return {
    children: <List size="small" dataSource={value} renderItem={listRender} />,
    props: [],
  };
};

const columns = [
  { title: '目标', dataIndex: 'ip' },
  { title: '端口', dataIndex: 'port' },
  { title: '服务', dataIndex: 'service_name' },
  { title: 'POC', dataIndex: 'poc', render: renderFun },
  { title: 'EXP', dataIndex: 'exp', render: renderFun },
  {
    title: '所属任务',
    dataIndex: 'operate',
    render: item => {
      return {
        children: <a href={item.url}>{item.text}</a>,
        props: [],
      };
    },
  },
];
const data = [
  {
    id: 'tcd001',
    ip: '172.18.0.1',
    port: '22',
    service_name: 'SSH',
    poc: [
      {
        id: 'tcd001pocd001',
        risk_level: 1,
        text: 'Microsoft Windows SMB 远程代码执行漏洞(CVE-2017-0145)(MS17-010)',
      },
      {
        id: 'tcd001pocd002',
        risk_level: 2,
        text: 'Microsoft Windows SMB 信息泄漏漏洞(CVE-2017-0147)(MS17-010)',
      },
      {
        id: 'tcd001pocd003',
        risk_level: 3,
        text: '可以获取远端Native Lan Manager版本',
      },
    ],
    exp: [
      {
        id: 'tecexp001',
        risk_level: 1,
        text: 'Microsoft Windows SMB 信息泄漏漏洞',
      },
    ],
    operate: { url: 'www.google.com', text: 'test1' },
  },
  {
    id: 'tcd002',
    ip: '192.168.0.1',
    port: '80',
    service_name: 'HTTP',
    poc: [
      {
        id: 'tcd002pocd001',
        risk_level: 1,
        text: 'Microsoft Windows SMB 远程代码执行漏洞(CVE-2017-0145)(MS17-010)',
      },
      {
        id: 'tcd002pocd002',
        risk_level: 2,
        text: 'Microsoft Windows SMB 信息泄漏漏洞(CVE-2017-0147)(MS17-010)',
      },
      {
        id: 'tcd002pocd003',
        risk_level: 3,
        text: '可以获取远端Native Lan Manager版本',
      },
    ],
    exp: [
      {
        id: 'tecexp001',
        risk_level: 1,
        text: 'Microsoft Windows SMB 信息泄漏漏洞',
      },
    ],
    operate: { url: 'www.google.com', text: 'test1' },
  },
  {
    id: 'tcd003',
    ip: '8.8.8.8',
    port: '443',
    service_name: 'HTTPS',
    poc: [
      {
        id: 'tcd003pocd001',
        risk_level: 2,
        text: 'Microsoft Windows SMB 远程代码执行漏洞(CVE-2017-0145)(MS17-010)',
      },
    ],
    exp: [
      {
        id: 'tecexp001',
        risk_level: 2,
        text: 'Microsoft Windows SMB 信息泄漏漏洞',
      },
    ],
    operate: { url: 'www.google.com', text: 'test1' },
  },
  {
    id: 'tcd004',
    ip: '12.34.56.78',
    port: '21',
    service_name: 'FTP',
    poc: [
      {
        id: 'tcd004pocd001',
        risk_level: 3,
        text: 'Microsoft Windows SMB 远程代码执行漏洞(CVE-2017-0145)(MS17-010)',
      },
    ],
    exp: [
      {
        id: 'tecexp001',
        risk_level: 3,
        text: 'Microsoft Windows SMB 信息泄漏漏洞',
      },
    ],
    operate: { url: 'www.google.com', text: 'test1' },
  },
];

class TableCard extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectedRowKeys: [],
  };
  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          rowKey="id"
        />
      </div>
    );
  }
}

export default TableCard;
