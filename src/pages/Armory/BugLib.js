import React, { Component, Fragment } from 'react';
import { connect } from 'umi';
import LinkMenu from '@/components/LinkMenu';
import { Card, Row, Col, Divider, Table, Input, Checkbox, Button } from 'antd';
import { DownOutlined, ReloadOutlined } from '@ant-design/icons';
import './buglib.less';

const type_columns = [
  {
    title: '类别名称',
    dataIndex: 'class',
    filters: [
      {
        text: '云安全',
        value: 'cloud_security',
      },
      {
        text: '远程溢出',
        value: 'remote_overflow',
      },
    ],
    onFilter: (value, record) => record.class.indexOf(value) === 0,
  },
];

const plainOptions = ['高', '中', '低', '信息'];

const name_columns = [
  {
    title: '风险级别',
    dataIndex: 'risk_level',
    render: (text, rows, index) => {
      const obj = {
        children: (
          <Button type="dashed" danger ghost>
            低风险
          </Button>
        ),
        props: [],
      };
      if (text + '' === '1') {
        obj.children = (
          <Button type="primary" danger>
            高风险
          </Button>
        );
      }
      if (text + '' === '2') {
        obj.children = (
          <Button danger ghost>
            中风险
          </Button>
        );
      }
      return obj;
    },
    sorter: (a, b) => a.risk_level - b.risk_level,
  },
  {
    title: '漏洞',
    dataIndex: 'bug',
    sorter: {
      compare: (a, b) => a.bug.length - b.bug.length,
      multiple: 3,
    },
    render: (text, rows, index) => {
      const obj = {
        children: <a>{text}</a>,
        props: [],
      };
      return obj;
    },
  },
  {
    title: '漏洞类别',
    dataIndex: 'bug_type',
    sorter: {
      compare: (a, b) => a.bug_type.length - b.bug_type.length,
      multiple: 2,
    },
    render: (text, rows, index) => {
      const obj = {
        children: <a>{text}</a>,
        props: [],
      };
      return obj;
    },
  },
];

class BugLib extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {
      dispatch,
      location: { pathname },
    } = this.props;
    if (pathname === '/buglib') {
      dispatch({
        type: 'buglib/query',
      });
    }
  }
  render() {
    const { type_data, name_data } = this.props.buglib;
    return (
      <Fragment>
        <LinkMenu menu="漏洞库" />
        <br />
        <Card style={{ width: '100%' }}>
          <Row gutter={(24, 24)}>
            <Col span={12}>
              <Row gutter={(24, 24)} align="middle">
                <Col span={11}>
                  <span>漏洞分类</span>
                </Col>
                <Col span={11}></Col>
                <Col span={2}>
                  <DownOutlined />
                  &nbsp;&nbsp;&nbsp;
                  <ReloadOutlined spin="true" />
                </Col>
              </Row>
              <Divider />
              <Table
                columns={type_columns}
                dataSource={type_data}
                rowKey={'id'}
              />
            </Col>
            <Col span={12}>
              <Row gutter={(24, 24)} align="middle">
                <Col span={11}>
                  <Input
                    addonBefore="漏洞名称"
                    placeholder="搜索漏洞名\CNNVD\CVE[回车搜索]"
                  />
                </Col>
                <Col span={11}>
                  <Checkbox.Group
                    options={plainOptions}
                    defaultValue={['Apple']}
                  />
                </Col>
                <Col span={2}>
                  <DownOutlined />
                  &nbsp;&nbsp;&nbsp;
                  <ReloadOutlined spin="true" />
                </Col>
              </Row>
              <Divider />
              <Table
                columns={name_columns}
                dataSource={name_data}
                rowKey={'id'}
              />
            </Col>
          </Row>
        </Card>
      </Fragment>
    );
  }
}

export default connect(({ buglib }) => ({ buglib }))(BugLib);
