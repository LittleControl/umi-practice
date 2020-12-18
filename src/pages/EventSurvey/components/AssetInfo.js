import React, { Component, Fragment } from 'react';
import { Divider, Radio, Button, Row, Col, Space } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import './assetinfo.less';

class AssetInfo extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    show: true,
  };
  toggleShow = () => {
    this.setState(state => ({
      show: !state.show,
    }));
  };
  render() {
    return (
      <Fragment>
        <h2>资产信息</h2>
        <Divider />
        <Row align="middle">
          <Col className="gutter-row" span={2}>
            <span style={{ fontSize: '1.5em' }}>操作系统:</span>
          </Col>
          <Col className="gutter-row" span={4}>
            <Radio.Group name="radiogroup" defaultValue={'Linux'}>
              <Space value={'large'}>
                <Radio value={'Linux'}>
                  <span style={{ fontSize: '1.3em' }}>Linux</span>
                </Radio>
                <Radio value={'Windows'}>
                  <span style={{ fontSize: '1.3em' }}>Windows</span>
                </Radio>
              </Space>
            </Radio.Group>
          </Col>
          <Col className="gutter-row" span={2}>
            <Button type="primary" ghost>
              agent下载
            </Button>
          </Col>
          <Col className="gutter-row" span={3}>
            <CheckCircleOutlined
              style={{ fontSize: '1.5em', color: '#bfa' }}
              className={this.state.show ? '' : 'hide'}
            />
            <span
              style={{ fontSize: '1.5em', color: '#bfa' }}
              className={this.state.show ? '' : 'hide'}
            >
              下载完成
            </span>
          </Col>
        </Row>
        <Row style={{ marginTop: '15px' }}>
          <Col className="gutter-row" span={2}></Col>
          <Col className="gutter-row" span={4}>
            <Button type="primary" onClick={this.toggleShow}>
              提交
            </Button>
          </Col>
          <Col className="gutter-row" span={3}></Col>
        </Row>
      </Fragment>
    );
  }
}

export default AssetInfo;
