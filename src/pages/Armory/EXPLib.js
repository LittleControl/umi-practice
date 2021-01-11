import React, { Component } from 'react';
import { connect } from 'umi';
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

class EXPLib extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {
      dispatch,
      location: { pathname },
    } = this.props;
    if (pathname === '/explib') {
      dispatch({
        type: 'explib/query',
      });
    }
  }
  state = {
    cve_name: '',
    full_name: '',
    risk_level: '',
    description: '',
  };
  onRowClick(record) {
    const { cve_name, full_name, risk_level, description } = record;
    this.setState({
      cve_name,
      full_name,
      risk_level,
      description,
    });
  }
  render() {
    const { exp_data } = this.props.explib;
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
              <Table
                columns={columns}
                dataSource={exp_data}
                rowKey={'id'}
                onRow={record => {
                  return {
                    onClick: () => this.onRowClick(record), // 点击行
                    onDoubleClick: event => {},
                    onContextMenu: event => {},
                    onMouseEnter: event => {}, // 鼠标移入行
                    onMouseLeave: event => {},
                  };
                }}
              />
            </Card>
          </Col>
          <Col span={11}>
            <Card style={{ width: '100%' }}>
              <h2>EXP详情</h2>
              <Divider />
              <Descriptions column={1}>
                <Descriptions.Item label="名称">
                  {this.state.cve_name}
                </Descriptions.Item>
                <Descriptions.Item label="全称">
                  {this.state.full_name}
                </Descriptions.Item>
                <Descriptions.Item label="风险等级">
                  {this.state.risk_level === 1 ? (
                    <Button type="primary" danger>
                      {' '}
                      高危
                    </Button>
                  ) : this.state.risk_level === 2 ? (
                    <Button danger>中危</Button>
                  ) : (
                    <Button type="dashed" danger>
                      低危
                    </Button>
                  )}
                </Descriptions.Item>
                <Descriptions.Item label="描述">
                  {this.state.description}
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default connect(({ explib }) => ({ explib }))(EXPLib);
