import React, { Component } from 'react';
import LinkMenu from '@/components/LinkMenu';
import {
  Row,
  Col,
  Divider,
  Card,
  Space,
  Input,
  Button,
  Tree,
  List,
  Descriptions,
  Result,
} from 'antd';
import {
  DesktopOutlined,
  ApartmentOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  BankOutlined,
  TagsOutlined,
} from '@ant-design/icons';
import './poclib.less';

const treeData = [
  {
    title: '网页技术',
    key: '0-0',
    icon: <BankOutlined />,
    children: [
      {
        title: 'CMS[30]',
        key: '0-0-0',
        icon: <TagsOutlined />,
      },
      {
        title: 'HanWeb[24]',
        key: '0-0-1',
        icon: <TagsOutlined />,
      },
      {
        title: 'Joomla[19]',
        key: '0-0-2',
        icon: <TagsOutlined />,
      },
    ],
  },
];
const listData = [
  's_cms前台无限制注入',
  '任意文件下载',
  '网站路径泄漏',
  '任意文件上传',
  'OMO CMS 默认口令',
  's_cms前台无限制注入',
  '任意文件下载',
  '网站路径泄漏',
  '任意文件上传',
  'OMO CMS 默认口令',
  's_cms前台无限制注入',
  '任意文件下载',
  '网站路径泄漏',
  '任意文件上传',
  'OMO CMS 默认口令',
  's_cms前台无限制注入',
  '任意文件下载',
  '网站路径泄漏',
  '任意文件上传',
  'OMO CMS 默认口令',
];

class POCLib extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <LinkMenu menu="POC库" />
        <br />
        <Card style={{ width: '100%' }}>
          <Row align="middle">
            <Col span={6}></Col>
            <Col span={12}>
              <Row style={{ fontSize: '1.5em' }}>
                <Col span={8}>
                  <DesktopOutlined className="icon-size" />
                  <span>总数据: 262&nbsp;&nbsp;&nbsp;</span>
                </Col>
                <Col span={8}>
                  <ApartmentOutlined className="icon-size" />
                  <span>分类: 21&nbsp;&nbsp;&nbsp;</span>
                </Col>
                <Col span={8}>
                  <MenuUnfoldOutlined className="icon-size" />
                  <span>厂商: 747&nbsp;&nbsp;&nbsp;</span>
                </Col>
              </Row>
            </Col>
            <Col span={4}></Col>
          </Row>
          <Divider />
          <Row align="middle" gutter={(24, 24)}>
            <Col span={4}>
              <Input addonBefore="厂商" placeholder="请选择" />
            </Col>
            <Col span={4}>
              <Input addonBefore="种类" placeholder="请选择" />
            </Col>
            <Col span={4}>
              <Input addonBefore="POC名称" placeholder="请输入POC类型" />
            </Col>
            <Col span={4}>
              <Input addonBefore="漏洞类型" placeholder="请选择" />
            </Col>
            <Col span={4}>
              <Input addonBefore="年份" placeholder="请选择" />
            </Col>
            <Col span={4}>
              <Space>
                <Button>搜索</Button>
                <Button>重置</Button>
              </Space>
            </Col>
          </Row>
          <Divider />
          <Row align="top">
            <Col span={8}>
              <Card>
                <Tree
                  showIcon
                  defaultExpandAll
                  defaultSelectedKeys={['0-0-0']}
                  switcherIcon={<DownOutlined />}
                  treeData={treeData}
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <List
                  header={<div>POC名称</div>}
                  dataSource={listData}
                  renderItem={item => <List.Item>{item}</List.Item>}
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Descriptions title="" column={1}>
                  <Descriptions.Item label="插件名称">
                    s_cmc前台_无限制注入
                  </Descriptions.Item>
                  <Descriptions.Item label="插件类型">
                    POC插件
                  </Descriptions.Item>
                  <Descriptions.Item label="危险级别">
                    <Button type="primary" danger>
                      高风险
                    </Button>
                  </Descriptions.Item>
                  <Descriptions.Item label="描述">
                    [漏洞对象]: s_cms
                    <br />
                    [漏洞描述]: cms前台存在无限制的SQL注入
                  </Descriptions.Item>
                  <Descriptions.Item label="解决办法">
                    1. 过滤用户输入数据 <br />
                    2. 安装防火墙 <br />
                    3. 升级至最新版本
                  </Descriptions.Item>
                </Descriptions>
              </Card>
              <br />
              <Card>
                <span>可探测目标存在</span>
                <p>
                  <span
                    style={{
                      fontSize: '1.5em',
                      fontWeight: 'bold',
                      color: '#1890ff',
                    }}
                  >
                    0
                  </span>{' '}
                  条资产数据
                </p>
                <Result status="404" />
              </Card>
            </Col>
          </Row>
        </Card>
      </>
    );
  }
}

export default POCLib;
