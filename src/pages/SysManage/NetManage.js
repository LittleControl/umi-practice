import React, { Component } from 'react';
import {
  Card,
  Tabs,
  Table,
  Button,
  Space,
  Divider,
  Row,
  Col,
  Input,
} from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import AddItemModal from './components/AddItemModal';

const { TabPane } = Tabs;
const ipColums = [
  { title: 'VLAN名称', dataIndex: 'vlan_name' },
  { title: 'IP地址', dataIndex: 'ip' },
  { title: '子网掩码', dataIndex: 'sub_mask' },
  { title: 'MTU', dataIndex: 'mtu' },
  {
    title: '状态',
    dataIndex: 'status',
    render: item => {
      const obj = {
        children: item,
        props: [],
      };
      if (item === 'enabled') {
        obj.children = '已启用';
      } else {
        obj.children = '未启用';
      }
      return obj;
    },
  },
  {
    title: '操作',
    dataIndex: 'operate',
    render: (item, rows, index) => {
      const obj = {
        children: item,
        props: [],
      };
      obj.children = (
        <Space>
          {/* <Button type="primary" ghost>
            编辑
          </Button> */}
          <AddItemModal />
          <Button danger ghost>
            删除
          </Button>
        </Space>
      );
      return obj;
    },
  },
];
const ipData = [
  {
    id: 'ipd001',
    vlan_name: 'MntVlan',
    ip: '127.0.0.1',
    sub_mask: '255.255.255.0',
    mtu: '1500',
    status: 'enabled',
  },
  {
    id: 'ipd002',
    vlan_name: 'AllVlan',
    ip: '192.168.1.1',
    sub_mask: '255.255.255.0',
    mtu: '1500',
    status: 'disabled',
  },
];
const OperationsSlot = {
  right: (
    <Space>
      {/* <Button type="primary" ghost>
        新增
      </Button> */}
      <AddItemModal />
      <Button danger ghost>
        刷新
      </Button>
    </Space>
  ),
};
const infaColums = [
  { title: '接口名称', dataIndex: 'infa_name' },
  { title: 'VLAN名称', dataIndex: 'vlan_name' },
  {
    title: '接口启用/禁用',
    dataIndex: 'infa_status',
    render: value => {
      const obj = {
        children: value,
        props: [],
      };
      if (value === 'enabled') {
        obj.children = '启用';
      } else {
        obj.children = '禁用';
      }
      return obj;
    },
  },
  { title: '端口状态', dataIndex: 'port_status' },
  { title: '发送速率(bps)', dataIndex: 'send_rate' },
  { title: '发包速率(pps)', dataIndex: 'pkg_send_rate' },
  { title: '接收速率(bps)', dataIndex: 'receive_rate' },
  { title: '收包速率(pps)', dataIndex: 'pkg_receive_rate' },
  {
    title: '操作',
    dataIndex: 'operate',
    render: () => {
      return {
        children: (
          <Button type="primary" ghost>
            编辑
          </Button>
        ),
        props: [],
      };
    },
  },
];
const infaData = [
  {
    id: 'ifa001',
    infa_name: 'GE0',
    vlan_name: 'MngtVlan',
    infa_status: 'enabled',
    port_status: 'down',
    send_rate: '0',
    pkg_send_rate: '7',
    receive_rate: '223',
    pkg_receive_rate: '90',
  },
  {
    id: 'ifa002',
    infa_name: 'GE1',
    vlan_name: 'MngtVlan',
    infa_status: 'disabled',
    port_status: 'up',
    send_rate: '30',
    pkg_send_rate: '0',
    receive_rate: '0',
    pkg_receive_rate: '78',
  },
  {
    id: 'ifa003',
    infa_name: 'GE2',
    vlan_name: 'MngtVlan',
    infa_status: 'enabled',
    port_status: 'down',
    send_rate: '0',
    pkg_send_rate: '7',
    receive_rate: '223',
    pkg_receive_rate: '90',
  },
  {
    id: 'ifa004',
    infa_name: 'GE3',
    vlan_name: 'MngtVlan',
    infa_status: 'disabled',
    port_status: 'up',
    send_rate: '40',
    pkg_send_rate: '0',
    receive_rate: '0',
    pkg_receive_rate: '78',
  },
  {
    id: 'ifa005',
    infa_name: 'GE4',
    vlan_name: 'MngtVlan',
    infa_status: 'enabled',
    port_status: 'down',
    send_rate: '0',
    pkg_send_rate: '7',
    receive_rate: '145',
    pkg_receive_rate: '90',
  },
];
const routeColums = [
  { title: '目的地址', dataIndex: 'target_ip' },
  { title: '子网掩码/子网前缀长度', dataIndex: 'sub_mask_len' },
  { title: '下一跳', dataIndex: 'next_hop' },
  { title: 'Metric', dataIndex: 'metric' },
];
const routeData = [
  {
    id: 'rd001',
    target_ip: '0.0.0.0',
    sub_mask_len: '0.0.0.0',
    next_hop: '192.168.1.1',
    metric: '0',
  },
  {
    id: 'rd002',
    target_ip: '127.0.0.1',
    sub_mask_len: '255.255.255.0',
    next_hop: '192.168.1.1',
    metric: '1',
  },
  {
    id: 'rd003',
    target_ip: '192.168.1.1',
    sub_mask_len: '255.255.0.0',
    next_hop: '114.114.114.114',
    metric: '2',
  },
  {
    id: 'rd004',
    target_ip: '255.255.255.255',
    sub_mask_len: '255.0.0.0',
    next_hop: '127.0.0.1',
    metric: '3',
  },
  {
    id: 'rd005',
    target_ip: '8.8.8.8',
    sub_mask_len: '255.255.255.255',
    next_hop: '178.965.41.23',
    metric: '4',
  },
];

class NetManage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    activeTab: 'ip_manage',
  };
  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };
  onTabChange = activeKeys => {
    console.log(activeKeys);
    this.setState({
      activeTab: activeKeys,
    });
  };
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <>
        <Card>
          <Tabs
            defaultActiveKey="ip_manage"
            tabBarExtraContent={OperationsSlot}
            onChange={this.onTabChange}
          >
            <TabPane tab="IP管理配置" key="ip_manage">
              <Table rowKey={'id'} columns={ipColums} dataSource={ipData} />
            </TabPane>
            <TabPane tab="接口配置" key="infa_manage">
              <Table rowKey={'id'} columns={infaColums} dataSource={infaData} />
            </TabPane>
            <TabPane tab="路由配置" key="route_manage">
              <Table
                rowKey={'id'}
                columns={routeColums}
                dataSource={routeData}
                rowSelection={rowSelection}
              />
            </TabPane>
            <TabPane tab="DNS配置" key="dns_manage">
              <p>
                <RocketOutlined />
                主备DNS服务器
              </p>
              <Divider />
              <Row>
                <Col span={3}>主DNS服务器</Col>
                <Col span={7}>
                  <Input value="8.8.8.8" />
                </Col>
                <Col span={1}></Col>
                <Col span={10}>
                  <p>
                    <span style={{ color: 'red' }}>*</span>支持IPV4以及IPV6网络,
                    IPV6网络示例: 2001:0db8:85a3:08d3:1319:8a2e:0370:7344
                  </p>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col span={3}>备DNS服务器</Col>
                <Col span={7}>
                  <Input value="114.114.114.114" />
                </Col>
                <Col span={1}></Col>
                <Col span={10}></Col>
              </Row>
              <br />
              <Row>
                <Col span={3}>
                  <Button type="primary">保存</Button>
                </Col>
                <Col span={7}></Col>
                <Col span={1}></Col>
                <Col span={10}></Col>
              </Row>
            </TabPane>
          </Tabs>
        </Card>
      </>
    );
  }
}

export default NetManage;
