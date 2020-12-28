import React, { useState } from 'react';
import { connect } from 'umi';
import {
  Modal,
  Button,
  Steps,
  message,
  Row,
  Col,
  Input,
  Divider,
  Space,
  Select,
  Spin,
} from 'antd';
import './additemmodal.less';
import EditableTable from './EditableTable';

const { Step } = Steps;
const { Option } = Select;

const AddItemModal = props => {
  const { type, row } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const handleIpEditDel = () => {
    const { dispatch } = props;
    dispatch({
      type: 'netmanage/deleteRow',
      payload: {
        row,
      },
    });
  };
  // type: [ip_manage, infa_manage, route_manage, dns_manage, ip_manage_edit]
  if (type === 'infa_manage') {
    return (
      <Button type="primary" ghost>
        刷新
      </Button>
    );
  }
  if (type === 'route_manage') {
    return (
      <>
        <Space>
          <Button type="primary" ghost onClick={showModal}>
            新增
          </Button>
          <Button danger ghost>
            刷新
          </Button>
        </Space>
        <Modal
          title="VLAN 接口配置"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={1000}
        >
          <h2>新增路由</h2>
          <Divider />
          <Row gutter={(24, 24)}>
            <Col span={5}>目的地址</Col>
            <Col span={9}>
              <Input />
            </Col>
            <Col span={10}>
              <span style={{ color: 'red' }}>*</span>提示: 请填写目的IP地址.
              例如: ipv4:192.1668.3.22 例如:
              ipv6:2001:fecd:ba23:cd1f:dcb1:1010:9324:4088
            </Col>
          </Row>
          <br />
          <Row gutter={(24, 24)}>
            <Col span={5}>子网掩码/子网前缀长度</Col>
            <Col span={9}>
              <Input />
            </Col>
            <Col span={10}>
              <span style={{ color: 'red' }}>*</span>提示:
              请填写子网掩码/子网前缀长度. 例如: ipv4:255.255.255.0 例如:
              ipv6:64
            </Col>
          </Row>
          <br />
          <Row gutter={(24, 24)}>
            <Col span={5}>下一跳</Col>
            <Col span={9}>
              <Input />
            </Col>
            <Col span={10}>
              <span style={{ color: 'red' }}>*</span>提示: 请填写下一跳IP地址.
              格式与[目的地址]相同
            </Col>
          </Row>
          <br />
          <Row gutter={(24, 24)}>
            <Col span={5}>Metric</Col>
            <Col span={9}>
              <Input />
            </Col>
            <Col span={10}>
              <span style={{ color: 'red' }}>*</span>
              指路由算法用以确定到达目的地的最佳路径的计量标准(范围是1~9999).
              默认: 1
            </Col>
          </Row>
          <Button type="primary">提交</Button>
        </Modal>
      </>
    );
  }
  if (type === 'dns_manage') {
    return <></>;
  }
  if (type === 'ip_manage_edit') {
    if (row) {
      const { id, vlan_name, mtu, status } = row;
      const ip_edit_steps = [
        {
          title: '基本配置',
          content: (
            <>
              <Row align="middle" gutter={(24, 24)}>
                <Col span={6}>
                  <span style={{ color: 'red' }}>*</span>VLAN编号
                </Col>
                <Col span={9}>
                  <Input value={id} />
                </Col>
                <Col span={9}>
                  <span>
                    <span style={{ color: 'red' }}>*</span>
                    [系统内置VLAN编号为1,新增VLAN号请输入[2-4094]之间,且不同于已有VLAN的数组]
                  </span>
                </Col>
              </Row>
              <br />
              <Row align="middle" gutter={(24, 24)}>
                <Col span={6}>VLAN名称</Col>
                <Col span={9}>
                  <Input value={vlan_name} />
                </Col>
                <Col span={9}>VLAN名称,不定义名称则默认命名为: VLAN编号</Col>
              </Row>
              <br />
              <Row align="middle" gutter={(24, 24)}>
                <Col span={6}>MTU</Col>
                <Col span={9}>
                  <Input value={mtu} />
                </Col>
                <Col span={9}>
                  <span style={{ color: 'red' }}>*</span>
                </Col>
              </Row>
              <br />
              <Row align="middle" gutter={(24, 24)}>
                <Col span={6}>状态</Col>
                <Col span={9}>
                  <Select defaultValue={status} style={{ width: '100%' }}>
                    <Option value="enabled">启用</Option>
                    <Option value="disabled">禁用</Option>
                  </Select>
                </Col>
                <Col span={9}>
                  <span style={{ color: 'red' }}>*</span>
                </Col>
              </Row>
              <br />
            </>
          ),
        },
        {
          title: '接口IP配置',
          content: <EditableTable type={'ip'} />,
        },
      ];
      return (
        <>
          <Space>
            <Button type="primary" ghost onClick={showModal}>
              编辑
            </Button>
            <Button danger ghost onClick={handleIpEditDel}>
              删除
            </Button>
          </Space>
          <Modal
            title="VLAN 接口配置"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
          >
            <Steps current={current}>
              {ip_edit_steps.map(item => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content">
              {ip_edit_steps[current].content}
            </div>
            <div className="steps-action">
              {current < ip_edit_steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === ip_edit_steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => message.success('Processing complete!')}
                >
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
            </div>
          </Modal>
        </>
      );
    } else {
      return <Spin />;
    }
  }
  const ip_steps = [
    {
      title: '基本配置',
      content: (
        <>
          <Row align="middle" gutter={(24, 24)}>
            <Col span={6}>
              <span style={{ color: 'red' }}>*</span>VLAN编号
            </Col>
            <Col span={9}>
              <Input />{' '}
            </Col>
            <Col span={9}>
              <span>
                <span style={{ color: 'red' }}>*</span>&nbsp;
                [系统内置VLAN编号为1,新增VLAN号请输入[2-4094]之间,且不同于已有VLAN的数组]
              </span>
            </Col>
          </Row>
          <br />
          <Row align="middle" gutter={(24, 24)}>
            <Col span={6}>VLAN名称</Col>
            <Col span={9}>
              <Input />
            </Col>
            <Col span={9}>VLAN名称,不定义名称则默认命名为: VLAN编号</Col>
          </Row>
          <br />
          <Row align="middle" gutter={(24, 24)}>
            <Col span={6}>MTU</Col>
            <Col span={9}>
              <Input />
            </Col>
            <Col span={9}>
              <span style={{ color: 'red' }}>*</span>
            </Col>
          </Row>
          <br />
          <Row align="middle" gutter={(24, 24)}>
            <Col span={6}>状态</Col>
            <Col span={9}>
              <Select defaultValue="enabled" style={{ width: '100%' }}>
                <Option value="enabled">启用</Option>
                <Option value="disabled">禁用</Option>
              </Select>
            </Col>
            <Col span={9}>
              <span style={{ color: 'red' }}>*</span>
            </Col>
          </Row>
          <br />
        </>
      ),
    },
    {
      title: '接口IP配置',
      content: <EditableTable type={'ip'} />,
    },
  ];
  return (
    <>
      <Space>
        <Button type="primary" ghost onClick={showModal}>
          新增
        </Button>
        <Button danger ghost>
          刷新
        </Button>
      </Space>
      <Modal
        title="VLAN 接口配置"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <Steps current={current}>
          {ip_steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{ip_steps[current].content}</div>
        <div className="steps-action">
          {current < ip_steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === ip_steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success('Processing complete!')}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </Modal>
    </>
  );
};

export default connect(({ netmanage }) => ({ netmanage }))(AddItemModal);
