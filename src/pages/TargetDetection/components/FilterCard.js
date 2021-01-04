import React, { Component } from 'react';
import { connect } from 'umi';
import { Select, Space, Button, Input, Row, Col, Card, Form } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';
import styles from './filtercard.less';

const { Option } = Select;

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
  onFinish(values) {
    const { dispatch } = this.props;
    dispatch({
      type: 'targetdetection/filter',
      payload: values,
    });
  }
  render() {
    const { Item } = Form;
    const initialValues = {
      address: {
        type: 'all',
      },
    };
    return (
      <Card>
        <Form
          onFinish={values => this.onFinish(values)}
          initialValues={initialValues}
        >
          <Row align={'middle'}>
            <Col span={5}>
              <Item noStyle>
                <Input.Group compact style={{ align: 'center' }}>
                  <Item name={['address', 'type']} noStyle>
                    <Select style={{ fontSize: '1.3em' }}>
                      <Option value="all">全部字段</Option>
                      <Option value="ip">IP字段</Option>
                      <Option value="url">url字段</Option>
                    </Select>
                  </Item>
                  <Item name={['address', 'value']} noStyle>
                    <Input placeholder="Input Here" style={{ width: '50%' }} />
                  </Item>
                </Input.Group>
              </Item>
            </Col>
            <Col span={5}>
              <span className={styles.spanfont}>端口&nbsp;&nbsp;</span>
              <Item name="port" noStyle>
                <Select placeholder="请选择" style={{ width: '10vw' }}>
                  <Option value="all">全选</Option>
                  <Option value="22">22</Option>
                  <Option value="443">443</Option>
                </Select>
              </Item>
            </Col>
            <Col span={5}>
              <span className={styles.spanfont}>操作系统&nbsp;&nbsp;</span>
              <Item name="os" noStyle>
                <Select placeholder="请选择" style={{ width: '10vw' }}>
                  <Option value="all">全选</Option>
                  <Option value="linux">Linux</Option>
                  <Option value="windows">Windows</Option>
                </Select>
              </Item>
            </Col>
            <Col span={5}>
              <span className={styles.spanfont}>设备类型&nbsp;&nbsp;</span>
              <Item name="equipment" noStyle>
                <Select placeholder="请选择" style={{ width: '10vw' }}>
                  <Option value="all">全部</Option>
                  <Option value="route">路由设备</Option>
                  <Option value="cloud">云服务设备</Option>
                </Select>
              </Item>
            </Col>
            <Col span={4} push={1} style={this.state.showStyle}>
              <Space>
                <DoubleRightOutlined rotate="90" onClick={this.unfoldFilter} />
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
                <Button>重置</Button>
              </Space>
            </Col>
          </Row>
          <br style={this.state.hideStyle} />
          <Row style={this.state.hideStyle}>
            <Col span={5}>
              <span className={styles.spanfont}>设备厂商&nbsp;&nbsp;</span>
              <Item name="vendor" noStyle>
                <Select placeholder="请选择" style={{ width: '10vw' }}>
                  <Option value="google">Google</Option>
                  <Option value="apple">Apple</Option>
                  <Option value="sumsung">Sumsung</Option>
                </Select>
              </Item>
            </Col>
            <Col span={5}>
              <span className={styles.spanfont}>所属任务&nbsp;&nbsp;</span>
              <Item name="task" noStyle>
                <Select placeholder="请选择" style={{ width: '10vw' }}>
                  <Option value="test1">Test1</Option>
                  <Option value="test2">Test2</Option>
                  <Option value="test3">Test3</Option>
                </Select>
              </Item>
            </Col>
            <Col span={5}></Col>
            <Col span={5}></Col>
            <Col span={4} push={1}>
              <Space>
                <DoubleRightOutlined rotate="-90" onClick={this.unfoldFilter} />
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
                <Button>重置</Button>
              </Space>
            </Col>
          </Row>
        </Form>
      </Card>
    );
  }
}

export default connect(({ targetdetection }) => targetdetection)(FilterCard);
