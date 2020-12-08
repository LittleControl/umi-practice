import React, { Component } from 'react';
import { Table, Radio } from 'antd';
import './appcard.less';

const blodFontRender = (text, row, index) => {
  const obj = {
    children: text,
    props: [],
  };
  if (index === 0) {
    obj.children = <span className="bold">{text}</span>;
  }
  return obj;
};

const columns = [
  {
    title: '',
    dataIndex: 'target',
    colSpan: 2,
    render: (text, row, index) => {
      const obj = {
        children: <Radio>{text}</Radio>,
        props: [],
      };
      if (index === 1 || index === 4 || index === 6) {
        obj.props.rowSpan = 2;
      }
      if (index === 2 || index === 5 || index === 7) {
        obj.props.colSpan = 0;
      }
      if (index === 0) {
        obj.children = <Radio className="bold">{text}</Radio>;
      }
      return obj;
    },
  },
  {
    title: '',
    dataIndex: 'port',
    colSpan: 0,
    render: blodFontRender,
  },
  {
    title: '目标侦察',
    dataIndex: 'service',
    colSpan: 4,
    render: blodFontRender,
  },
  {
    title: 't4',
    dataIndex: 'vendor',
    colSpan: 0,
    render: blodFontRender,
  },
  {
    title: 't5',
    dataIndex: 'os',
    colSpan: 0,
    render: blodFontRender,
  },
  {
    title: 't6',
    dataIndex: 'equiptype',
    colSpan: 0,
    render: blodFontRender,
  },
  {
    title: '暴露面检测',
    dataIndex: 'weakpasswd',
    colSpan: 2,
    render: blodFontRender,
  },
  {
    title: 't8',
    dataIndex: 'loophole',
    colSpan: 0,
    render: blodFontRender,
  },
  {
    title: '渗透利用',
    dataIndex: 'poc',
    colSpan: 2,
    render: blodFontRender,
  },
  {
    title: 't10',
    dataIndex: 'exp',
    colSpan: 0,
    render: blodFontRender,
  },
  {
    title: '任务链日志',
    dataIndex: 'operate',
    render: blodFontRender,
  },
];
const data = [
  {
    target: '任务目标',
    port: '端口',
    service: '服务',
    vendor: '厂商',
    os: '操作系统',
    equiptype: '设备类型',
    weakpasswd: '弱口令',
    loophole: '漏洞',
    poc: 'POC',
    exp: 'EXP',
    operate: '操作',
  },
  {
    target: '172.18.0.1',
    port: '22',
    service: 'SSH',
    vendor: '安钛克',
    os: 'Ubuntu',
    equiptype: '服务器',
    weakpasswd: 3,
    loophole: '未检测',
    poc: '未检测',
    exp: '未检测',
    operate: '详情',
  },
  {
    target: '',
    port: '80',
    service: 'HTTP',
    vendor: 'Google',
    os: 'Ubuntu',
    equiptype: '云服务器资源',
    weakpasswd: '未检测',
    loophole: 6,
    poc: '未检测',
    exp: 6,
    operate: '详情',
  },
  {
    target: 'www.a.com',
    port: '443',
    service: 'HTTPS',
    vendor: 'Lenovo',
    os: 'Windows',
    equiptype: '物联网设备',
    weakpasswd: 6,
    loophole: '未检测',
    poc: 6,
    exp: 6,
    operate: '详情',
  },
];

class AppCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Table columns={columns} dataSource={data} bordered />;
  }
}

export default AppCard;
