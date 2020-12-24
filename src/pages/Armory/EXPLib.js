import React, { Component } from 'react';
import LinkMenu from '@/components/LinkMenu';
import {
  Card,
  Input,
  Row,
  Col,
  Select,
  Button,
  Checkbox,
  Space,
  Table,
  Descriptions,
  Divider,
} from 'antd';

const { Search } = Input;
const { Option } = Select;
const columns = [
  {
    title: '风险指数',
    dataIndex: 'risk_level',
    colSpan: 0,
    render: value => {
      const obj = {
        children: (
          <Button type="primary" danger>
            高危
          </Button>
        ),
        props: [],
      };
      if (value + '' === '2') {
        obj.children = <Button danger>中危</Button>;
      }
      if (value + '' === '3') {
        obj.children = (
          <Button type="dashed" danger>
            低危
          </Button>
        );
      }
      return obj;
    },
  },
  { title: '名称', dataIndex: 'cve_name', colSpan: 2 },
  { title: 'CVE编号', dataIndex: 'cve_id' },
  { title: '作者名称', dataIndex: 'cve_author' },
  { title: '发布时间', dataIndex: 'cve_time' },
];
const data = [
  {
    id: 'cved001',
    risk_level: 1,
    cve_name: 'ibestat $PATH Privilege Escalatison',
    cve_id: 'CVE-2020-1092',
    cve_author: 'Jack',
    cve_time: '2020-02-02',
  },
  {
    id: 'cved002',
    risk_level: 2,
    cve_name: 'ibestat $PATH Privilege Escalatison',
    cve_id: 'CVE-2020-1092',
    cve_author: 'Jack',
    cve_time: '2020-02-02',
  },
  {
    id: 'cved003',
    risk_level: 3,
    cve_name: 'ibestat $PATH Privilege Escalatison',
    cve_id: 'CVE-2020-1092',
    cve_author: 'Jack',
    cve_time: '2020-02-02',
  },
  {
    id: 'cved004',
    risk_level: 1,
    cve_name: 'ibestat $PATH Privilege Escalatison',
    cve_id: 'CVE-2020-1092',
    cve_author: 'Jack',
    cve_time: '2020-02-02',
  },
  {
    id: 'cved005',
    risk_level: 2,
    cve_name: 'ibestat $PATH Privilege Escalatison',
    cve_id: 'CVE-2020-1092',
    cve_author: 'Jack',
    cve_time: '2020-02-02',
  },
  {
    id: 'cved006',
    risk_level: 3,
    cve_name: 'ibestat $PATH Privilege Escalatison',
    cve_id: 'CVE-2020-1092',
    cve_author: 'Jack',
    cve_time: '2020-02-02',
  },
];

class EXPLib extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <LinkMenu menu={'EXP库'} />
        <br />
        <Card style={{ width: '100%' }}>
          <Row align={'middle'} gutter={(24, 24)}>
            <Col span={6}>
              <Search
                placeholder="搜索名称/CVE"
                allowClear
                enterButton="搜索"
              />
            </Col>
            <Col span={6}>
              <Button>作者</Button>
              <Select defaultValue="lucy" style={{ width: '70%' }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>
            <Col span={6}>
              <Space size={'large'}>
                <span>风险等级: </span>
                <Checkbox> 高 </Checkbox>
                <Checkbox> 中 </Checkbox>
                <Checkbox> 低 </Checkbox>
              </Space>
            </Col>
            <Col span={6}></Col>
          </Row>
        </Card>
        <br />
        <Row align={'top'} gutter={(24, 24)}>
          <Col span={13}>
            <Card style={{ width: '100%' }}>
              <Table columns={columns} dataSource={data} />
            </Card>
          </Col>
          <Col span={11}>
            <Card style={{ width: '100%' }}>
              <h2>EXP详情</h2>
              <Divider />
              <Descriptions column={1}>
                <Descriptions.Item label="名称">
                  ibestat $PATH Privilege Escalatison
                </Descriptions.Item>
                <Descriptions.Item label="全称">
                  /bug/local/ibestat
                </Descriptions.Item>
                <Descriptions.Item label="风险等级">
                  <Button type="primary" danger>
                    高危
                  </Button>
                </Descriptions.Item>
                <Descriptions.Item label="描述">
                  Nothing can be found, but if you have a idea, please don't
                  tell me that. I'm so sorry to hear that nothing can be found{' '}
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default EXPLib;
