import React, { Component } from 'react';
import LinkMenu from '@/components/LinkMenu';
import { Card, Button, Row, Col, Tag } from 'antd';
import './licensemanage.less';

class LicenseManage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <LinkMenu menu="License管理" />
        <br />
        <Card>
          <Card
            style={{ fontSize: '1.5em' }}
            type="inner"
            title={'硬件码'}
            headStyle={{ backgroundColor: '#BAB0F98F', fontSize: '1.5em' }}
          >
            <Row
              style={{
                backgroundColor: '#F0F2F5',
                borderTop: '1px soild gray',
                borderBottom: '1px soild gray',
              }}
            >
              <Col span={5}>设备硬件码</Col>
              <Col span={5}></Col>
              <Col span={14}>FA12J4O2OJRWJRO24JO23J4LJFLWJLAJR2O4JJ</Col>
            </Row>
            <br />
            <Row>
              <Col span={5}>许可证说明</Col>
              <Col span={5}></Col>
              <Col span={14}>
                若许可证到期, 需复制[设备硬件码]发送到厂商,重新申请许可证
              </Col>
            </Row>
          </Card>
          <Card
            type="inner"
            title="基本许可信息"
            headStyle={{ backgroundColor: '#BAB0F98F', fontSize: '1.5em' }}
            style={{ marginTop: 16 }}
          >
            <Row
              style={{
                backgroundColor: '#F0F2F5',
                borderTop: '1px soild gray',
                borderBottom: '1px soild gray',
              }}
            >
              <Col span={5}>产品名称</Col>
              <Col span={5}></Col>
              <Col span={14}>单兵作战系统</Col>
            </Row>
            <br />
            <Row>
              <Col span={5}>产品型号</Col>
              <Col span={5}></Col>
              <Col span={14}>DBZB</Col>
            </Row>
            <br />
            <Row
              style={{
                backgroundColor: '#F0F2F5',
                borderTop: '1px soild gray',
                borderBottom: '1px soild gray',
              }}
            >
              <Col span={5}>版本号</Col>
              <Col span={5}></Col>
              <Col span={14}>V3.0(4.0.2-R1-54889-20200308141336)</Col>
            </Row>
            <br />
            <Row>
              <Col span={5}>许可证类型</Col>
              <Col span={5}></Col>
              <Col span={14}>测试版</Col>
            </Row>
            <br />
            <Row
              style={{
                backgroundColor: '#F0F2F5',
                borderTop: '1px soild gray',
                borderBottom: '1px soild gray',
              }}
            >
              <Col span={5}>最大单位数</Col>
              <Col span={5}></Col>
              <Col span={14}>5(剩余: 2)</Col>
            </Row>
            <br />
            <Row>
              <Col span={5}>最大资产数</Col>
              <Col span={5}></Col>
              <Col span={14}>500(剩余: 20)</Col>
            </Row>
            <br />
            <Row
              style={{
                backgroundColor: '#F0F2F5',
                borderTop: '1px soild gray',
                borderBottom: '1px soild gray',
              }}
            >
              <Col span={5}>最大用户数</Col>
              <Col span={5}></Col>
              <Col span={14}>50(剩余: 28)</Col>
            </Row>
            <br />
            <Row>
              <Col span={5}>注册时间</Col>
              <Col span={5}></Col>
              <Col span={14}>2020-03-10 12:02:21</Col>
            </Row>
            <br />
            <Row
              style={{
                backgroundColor: '#F0F2F5',
                borderTop: '1px soild gray',
                borderBottom: '1px soild gray',
              }}
            >
              <Col span={5}>许可证到期时间</Col>
              <Col span={5}></Col>
              <Col span={14}>
                2020-06-08 12:04:07(剩余: 81天3小时10分钟13秒)
              </Col>
            </Row>
            <br />
            <Row>
              <Col span={5}>规则库升级到期时间</Col>
              <Col span={5}></Col>
              <Col span={14}>2020-06-08(剩余: 82天)</Col>
            </Row>
          </Card>
          <Card
            type="inner"
            title="功能模块"
            headStyle={{ backgroundColor: '#BAB0F98F', fontSize: '1.5em' }}
            style={{ marginTop: 16 }}
          >
            <Row
              style={{
                backgroundColor: '#F0F2F5',
                borderTop: '1px soild gray',
                borderBottom: '1px soild gray',
              }}
            >
              <Col span={5}>目标侦察</Col>
              <Col span={5}>
                <Tag color="success" style={{ fontSize: '1.5em' }}>
                  开启
                </Tag>
              </Col>
              <Col span={14}></Col>
            </Row>
            <br />
            <Row>
              <Col span={5}>暴露面检测</Col>
              <Col span={5}>
                <Tag color="success" style={{ fontSize: '1.5em' }}>
                  开启
                </Tag>
              </Col>
              <Col span={14}></Col>
            </Row>
            <br />
            <Row
              style={{
                backgroundColor: '#F0F2F5',
                borderTop: '1px soild gray',
                borderBottom: '1px soild gray',
              }}
            >
              <Col span={5}>渗透利用</Col>
              <Col span={5}>
                <Tag color="success" style={{ fontSize: '1.5em' }}>
                  开启
                </Tag>
              </Col>
              <Col span={14}></Col>
            </Row>
            <br />
            <Row>
              <Col span={5}>事件调查</Col>
              <Col span={5}>
                <Tag color="success" style={{ fontSize: '1.5em' }}>
                  开启
                </Tag>
              </Col>
              <Col span={14}></Col>
            </Row>
          </Card>
          <Card
            type="inner"
            title="扫描并发数"
            headStyle={{ backgroundColor: '#BAB0F98F', fontSize: '1.5em' }}
            style={{ marginTop: 16 }}
          >
            <Row
              style={{
                backgroundColor: '#F0F2F5',
                borderTop: '1px soild gray',
                borderBottom: '1px soild gray',
              }}
            >
              <Col span={5}>存活探测最大并发数</Col>
              <Col span={5}>
                <Tag color="success" style={{ fontSize: '1.5em' }}>
                  4
                </Tag>
              </Col>
              <Col span={14}></Col>
            </Row>
            <br />
            <Row>
              <Col span={5}>指纹探测最大并发数</Col>
              <Col span={5}>
                <Tag color="success" style={{ fontSize: '1.5em' }}>
                  4
                </Tag>
              </Col>
              <Col span={14}></Col>
            </Row>
            <br />
            <Row
              style={{
                backgroundColor: '#F0F2F5',
                borderTop: '1px soild gray',
                borderBottom: '1px soild gray',
              }}
            >
              <Col span={5}>Web扫描最大并发数</Col>
              <Col span={5}>
                <Tag color="success" style={{ fontSize: '1.5em' }}>
                  4
                </Tag>
              </Col>
              <Col span={14}></Col>
            </Row>
            <br />
            <Row>
              <Col span={5}>系统扫描最大并发数</Col>
              <Col span={5}>
                <Tag color="success" style={{ fontSize: '1.5em' }}>
                  4
                </Tag>
              </Col>
              <Col span={14}></Col>
            </Row>
            <br />
            <Row
              style={{
                backgroundColor: '#F0F2F5',
                borderTop: '1px soild gray',
                borderBottom: '1px soild gray',
              }}
            >
              <Col span={5}>POC漏洞验证最大并发数</Col>
              <Col span={5}>
                <Tag color="success" style={{ fontSize: '1.5em' }}>
                  4
                </Tag>
              </Col>
              <Col span={14}></Col>
            </Row>
            <br />
            <Row>
              <Col span={5}>EXP漏洞利用最大并发数</Col>
              <Col span={5}>
                <Tag color="success" style={{ fontSize: '1.5em' }}>
                  4
                </Tag>
              </Col>
              <Col span={14}></Col>
            </Row>
          </Card>
        </Card>
      </>
    );
  }
}

export default LicenseManage;
