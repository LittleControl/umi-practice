import React, { Component } from 'react';
import LinkMenu from '@/components/LinkMenu';
import {
  Card,
  Row,
  Col,
  Input,
  Table,
  Pagination,
  InputNumber,
  Space,
} from 'antd';
import { DownOutlined, ReloadOutlined } from '@ant-design/icons';

const combColums = [
  {
    title: '字典名称',
    dataIndex: 'dict_name',
    filters: [
      {
        text: 'SMTP',
        value: 'smtp',
      },
      {
        text: 'MySQL',
        value: 'mysql',
      },
    ],
    onFilter: (value, record) => record.dict_name.indexOf(value) === 0,
  },
  { title: '所属服务', dataIndex: 'b_service' },
  { title: '字典总数', dataIndex: 'dict_sum' },
  { title: '操作', dataIndex: 'operate' },
];
const combData = [
  {
    id: 'cd001',
    dict_name: 'SMTP组合字典',
    b_service: 'SMTP',
    dict_sum: '23',
    operate: '详情',
  },
  {
    id: 'cd002',
    dict_name: 'MySQL组合字典',
    b_service: 'MySQL',
    dict_sum: '34',
    operate: '详情',
  },
  {
    id: 'cd003',
    dict_name: 'PostgreSQL组合字典',
    b_service: 'PostgreSQL',
    dict_sum: '43',
    operate: '详情',
  },
  {
    id: 'cd004',
    dict_name: 'Oracle组合字典',
    b_service: 'Oracle',
    dict_sum: '31',
    operate: '详情',
  },
  {
    id: 'cd005',
    dict_name: 'RDP组合字典',
    b_service: 'RDP',
    dict_sum: '35',
    operate: '详情',
  },
];

const unameColums = [
  {
    title: '字典名称',
    dataIndex: 'dict_name',
    filters: [
      {
        text: 'SMTP',
        value: 'smtp',
      },
      {
        text: 'MySQL',
        value: 'mysql',
      },
    ],
    onFilter: (value, record) => record.dict_name.indexOf(value) === 0,
  },
  { title: '所属服务', dataIndex: 'b_service' },
  { title: '字典总数', dataIndex: 'dict_sum' },
  { title: '操作', dataIndex: 'operate' },
];
const unameData = [
  {
    id: 'ud001',
    dict_name: 'SMTP用户名字典',
    b_service: 'SMTP',
    dict_sum: '23',
    operate: '详情',
  },
  {
    id: 'ud002',
    dict_name: 'MySQL用户名字典',
    b_service: 'MySQL',
    dict_sum: '34',
    operate: '详情',
  },
  {
    id: 'ud003',
    dict_name: 'PostgreSQL用户名字典',
    b_service: 'PostgreSQL',
    dict_sum: '43',
    operate: '详情',
  },
  {
    id: 'ud004',
    dict_name: 'Oracle用户名字典',
    b_service: 'Oracle',
    dict_sum: '31',
    operate: '详情',
  },
  {
    id: 'ud005',
    dict_name: 'RDP用户名字典',
    b_service: 'RDP',
    dict_sum: '35',
    operate: '详情',
  },
];
const passwdColums = [
  {
    title: '字典名称',
    dataIndex: 'dict_name',
    filters: [
      {
        text: 'SMTP',
        value: 'smtp',
      },
      {
        text: 'MySQL',
        value: 'mysql',
      },
    ],
    onFilter: (value, record) => record.dict_name.indexOf(value) === 0,
  },
  { title: '所属服务', dataIndex: 'b_service' },
  { title: '字典总数', dataIndex: 'dict_sum' },
  { title: '操作', dataIndex: 'operate' },
];
const passwdData = [
  {
    id: 'pd001',
    dict_name: 'SMTP密码字典',
    b_service: 'SMTP',
    dict_sum: '23',
    operate: '详情',
  },
  {
    id: 'pd002',
    dict_name: 'MySQL密码字典',
    b_service: 'MySQL',
    dict_sum: '34',
    operate: '详情',
  },
  {
    id: 'pd003',
    dict_name: 'PostgreSQL密码字典',
    b_service: 'PostgreSQL',
    dict_sum: '43',
    operate: '详情',
  },
  {
    id: 'pd004',
    dict_name: 'Oracle密码字典',
    b_service: 'Oracle',
    dict_sum: '31',
    operate: '详情',
  },
  {
    id: 'pd005',
    dict_name: 'RDP密码字典',
    b_service: 'RDP',
    dict_sum: '35',
    operate: '详情',
  },
];

class PasswdLib extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const footers = () => (
      <Row>
        <Col span={6}>总共$sum条数据</Col>
        <Col span={2}></Col>
        <Col span={16}>
          <Space>
            <InputNumber size={'small'} defaultValue={3} />
            <Pagination simple defaultCurrent={3} total={50} />
          </Space>
        </Col>
      </Row>
    );

    return (
      <>
        <LinkMenu menu={'口令库'} />
        <br />
        <Card style={{ width: '100%' }}>
          <Row align="top">
            <Col span={8}>
              <Row gutter={(12, 24)} align="middle">
                <Col span={5}>
                  <span>组合字典</span>
                </Col>
                <Col span={15}>
                  <Input
                    addonBefore="字典名称"
                    placeholder="请输入字典名称[回车键搜索]"
                  />
                </Col>
                <Col span={4}>
                  <DownOutlined />
                  &nbsp;&nbsp;&nbsp;
                  <ReloadOutlined spin="true" />
                </Col>
              </Row>
              <Table
                columns={combColums}
                dataSource={combData}
                pagination={false}
                footer={footers}
              />
            </Col>
            <Col span={8}>
              <Row gutter={(12, 24)} align="middle">
                <Col span={5}>
                  <span>用户名字典</span>
                </Col>
                <Col span={15}>
                  <Input
                    addonBefore="字典名称"
                    placeholder="请输入字典名称[回车键搜索]"
                  />
                </Col>
                <Col span={4}>
                  <DownOutlined />
                  &nbsp;&nbsp;&nbsp;
                  <ReloadOutlined spin="true" />
                </Col>
              </Row>
              <Table
                columns={unameColums}
                dataSource={unameData}
                pagination={false}
                footer={footers}
              />
            </Col>
            <Col span={8}>
              <Row gutter={(12, 24)} align="middle">
                <Col span={5}>
                  <span>密码字典</span>
                </Col>
                <Col span={15}>
                  <Input
                    addonBefore="字典名称"
                    placeholder="请输入字典名称[回车键搜索]"
                  />
                </Col>
                <Col span={4}>
                  <DownOutlined />
                  &nbsp;&nbsp;&nbsp;
                  <ReloadOutlined spin="true" />
                </Col>
              </Row>
              <Table
                columns={passwdColums}
                dataSource={passwdData}
                pagination={false}
                footer={footers}
              />
            </Col>
          </Row>
        </Card>
      </>
    );
  }
}

export default PasswdLib;
