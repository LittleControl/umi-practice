import React, { Component } from 'react';
import { Select, Space, Button, Input, Row, Col, Card } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';
import styles from './filtercard.less';

const { Option } = Select;
const { Search } = Input;

class FilterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      showStyle: {},
      hideStyle: { display: 'none' },
    };
    this.unfoldFilter = this.unfoldFilter.bind(this);
  }
  unfoldFilter() {
    const { showMore } = this.state;
    if (showMore) {
      this.setState({
        showMore: false,
        showStyle: {},
        hideStyle: { display: 'none' },
      });
    } else {
      this.setState({
        showMore: true,
        showStyle: { display: 'none' },
        hideStyle: {},
      });
    }
  }
  render() {
    return (
      <Card style={{ width: '100%' }}>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <Select defaultValue="all" style={{ fontSize: '1.5em' }}>
              <Option value="all">全部字段</Option>
              <Option value="ip">IP字段</Option>
              <Option value="url">URL字段</Option>
            </Select>
            <Search placeholder="input search text" style={{ width: 200 }} />
          </Col>
          <Col className="gutter-row" span={5}>
            <Space>
              <span className={styles.spanfont}>端口</span>
              <Select placeholder="请选择" style={{ width: '10vw' }}>
                <Option value="all">全选</Option>
                <Option value="port22">22</Option>
                <Option value="port443">443</Option>
              </Select>
            </Space>
          </Col>
          <Col className="gutter-row" span={5}>
            <Space>
              <span className={styles.spanfont}>POC</span>
              <Select placeholder="请选择" style={{ width: '10vw' }}>
                <Option value="all">全选</Option>
                <Option value="linux">Linux</Option>
                <Option value="windows">Windows</Option>
              </Select>
            </Space>
          </Col>
          <Col className="gutter-row" span={5}>
            <Space>
              <span className={styles.spanfont}>EXP</span>
              <Select placeholder="请选择" style={{ width: '10vw' }}>
                <Option value="all">全部</Option>
                <Option value="route">路由设备</Option>
                <Option value="cloud">云服务设备</Option>
              </Select>
            </Space>
          </Col>
          <Col className="gutter-row" span={3} style={this.state.showStyle}>
            <Space>
              <DoubleRightOutlined rotate="90" onClick={this.unfoldFilter} />
              <Button type="primary">查询</Button>
              <Button>重置</Button>
            </Space>
          </Col>
        </Row>
        <Row gutter={[16]} style={this.state.hideStyle}>
          <Col className="gutter-row" span={6}>
            <Space>
              <span className={styles.spanfont}>设备厂商</span>
              <Select placeholder="请选择" style={{ width: '10vw' }}>
                <Option value="google">Google</Option>
                <Option value="apple">Apple</Option>
                <Option value="sumsung">Sumsung</Option>
              </Select>
            </Space>
          </Col>
          <Col className="gutter-row" span={5}>
            <Space>
              <span className={styles.spanfont}>所属任务</span>
              <Select placeholder="请选择" style={{ width: '10vw' }}>
                <Option value="test1">Test1</Option>
                <Option value="test2">Test2</Option>
                <Option value="test3">Test3</Option>
              </Select>
            </Space>
          </Col>
          <Col className="gutter-row" span={5}></Col>
          <Col className="gutter-row" span={5}></Col>
          <Col className="gutter-row" span={3}>
            <Space>
              <DoubleRightOutlined rotate="-90" onClick={this.unfoldFilter} />
              <Button type="primary">查询</Button>
              <Button>重置</Button>
            </Space>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default FilterCard;
