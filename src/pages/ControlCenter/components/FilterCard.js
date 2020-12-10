import React, { Component, Fragment } from 'react';
import { Select, Space, Button, Input, Row, Col } from 'antd';
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
      <Fragment>
        <Row gutter={[0, 24]}>
          <Col className="gutter-row" span={5}>
            <Select defaultValue="all" style={{ fontSize: '1.3em' }}>
              <Option value="all">全部字段</Option>
              <Option value="ip">IP字段</Option>
              <Option value="url">URL字段</Option>
            </Select>
            <Search placeholder="input search text" style={{ width: 150 }} />
          </Col>
          <Col className="gutter-row" span={4}>
            <Space>
              <span className={styles.spanfont}>漏洞状态</span>
              <Select placeholder="请选择" style={{ width: '7vw' }}>
                <Option value="all">全选</Option>
                <Option value="nodetected">未检测</Option>
                <Option value="detected">已检测</Option>
              </Select>
            </Space>
          </Col>
          <Col className="gutter-row" span={4}>
            <Space>
              <span className={styles.spanfont}>弱口令状态</span>
              <Select placeholder="请选择" style={{ width: '7vw' }}>
                <Option value="all">全选</Option>
                <Option value="nodetected">未检测</Option>
                <Option value="detected">已检测</Option>
              </Select>
            </Space>
          </Col>
          <Col className="gutter-row" span={4}>
            <Space>
              <span className={styles.spanfont}>POC状态</span>
              <Select placeholder="请选择" style={{ width: '7vw' }}>
                <Option value="all">全部</Option>
                <Option value="nodetected">未检测</Option>
                <Option value="num">数字</Option>
              </Select>
            </Space>
          </Col>
          <Col className="gutter-row" span={4}>
            <Space>
              <span className={styles.spanfont}>EXP状态</span>
              <Select placeholder="请选择" style={{ width: '7vw' }}>
                <Option value="all">全部</Option>
                <Option value="nodetected">未检测</Option>
                <Option value="detected">已检测</Option>
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
        <Row gutter={[0]} style={this.state.hideStyle}>
          <Col className="gutter-row" span={5}>
            <Space>
              <span className={styles.spanfont}>厂商</span>
              <Select placeholder="请选择" style={{ width: '7vw' }}>
                <Option value="all">全选</Option>
                <Option value="huawei">华为</Option>
                <Option value="huasan">华三</Option>
              </Select>
            </Space>
          </Col>
          <Col className="gutter-row" span={4}>
            <Space>
              <span className={styles.spanfont}>设备类型 </span>
              <Select placeholder="请选择" style={{ width: '7vw' }}>
                <Option value="all">全选</Option>
                <Option value="midware">中间件</Option>
                <Option value="router">路由器</Option>
              </Select>
            </Space>
          </Col>
          <Col className="gutter-row" span={4}>
            <Space>
              <span className={styles.spanfont}>操作系统</span>
              <Select placeholder="请选择" style={{ width: '7vw' }}>
                <Option value="all">全选</Option>
                <Option value="linux">Linux</Option>
                <Option value="windows">Windows</Option>
              </Select>
            </Space>
          </Col>
          <Col className="gutter-row" span={4}>
            <Space>
              <span className={styles.spanfont}>单位</span>
              <Select placeholder="请选择" style={{ width: '7vw' }}>
                <Option value="all">全选</Option>
                <Option value="unita">A单位</Option>
                <Option value="unitb">B单位</Option>
              </Select>
            </Space>
          </Col>
          <Col className="gutter-row" span={4}>
            <Space>
              <span className={styles.spanfont}>端口/服务</span>
              <Select placeholder="请选择" style={{ width: '7vw' }}>
                <Option value="all">全选</Option>
                <Option value="http">80/HTTP</Option>
                <Option value="ftp">21/FTP</Option>
              </Select>
            </Space>
          </Col>
          <Col className="gutter-row" span={3}>
            <Space>
              <DoubleRightOutlined rotate="-90" onClick={this.unfoldFilter} />
              <Button type="primary">查询</Button>
              <Button>重置</Button>
            </Space>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default FilterCard;
