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
  Form,
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
      type: 'netmanage/deleteIpRow',
      payload: {
        row,
      },
    });
  };
  // type: [ip_manage, infa_manage, route_manage, dns_manage, ip_manage_edit, infa_manage_edit]
  if (type === 'infa_manage') {
    return (
      <Button type="primary" ghost>
        刷新
      </Button>
    );
  }
  const infa_manage_edit_onFinish = values => {
    const { dispatch } = props;
    dispatch({
      type: 'netmanage/editInfaRow',
      payload: {
        row,
        values,
      },
    });
    message.success('Processing complete!');
    handleCancel();
  };
  if (type === 'infa_manage_edit') {
    if (row) {
      const {
        id,
        infa_name,
        vlan_name,
        infa_status,
        port_status,
        bandwidth,
      } = row;
      const initialValues = {
        id,
        infa_name,
        vlan_name,
        infa_status,
        port_status,
        bandwidth,
      };
      return (
        <>
          <Button type="primary" ghost onClick={showModal}>
            编辑
          </Button>
          <Modal
            title="VLAN 接口配置"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            width={1000}
          >
            <Form
              onFinish={infa_manage_edit_onFinish}
              initialValues={initialValues}
            >
              <Row align="top" gutter={(24, 24)}>
                <Col span={4}>接口名称</Col>
                <Col span={9}>
                  <Form.Item
                    name="infa_name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input the infa_name',
                      },
                    ]}
                  >
                    <Input placeholder={infa_name} />
                  </Form.Item>
                </Col>
                <Col span={11}></Col>
              </Row>
              <Row align="top" gutter={(24, 24)}>
                <Col span={4}>传输速率</Col>
                <Col span={9}>
                  <Form.Item
                    name="bandwidth"
                    rules={[
                      {
                        required: true,
                        message: 'Please input the bandwidth!',
                      },
                    ]}
                  >
                    <Input placeholder={bandwidth} />
                  </Form.Item>
                </Col>
                <Col span={11}></Col>
              </Row>
              <Row align="top" gutter={(24, 24)}>
                <Col span={4}>VLAN接口</Col>
                <Col span={9}>
                  <Form.Item
                    name="vlan_name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input the vlan interface',
                      },
                    ]}
                  >
                    <Input placeholder={vlan_name} />
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <span>
                    <span style={{ color: 'red' }}>*</span>
                    设置VLAN接口对应的IP的子网掩码
                  </span>
                </Col>
              </Row>
              <Row align="top" gutter={(24, 24)}>
                <Col span={4}>VLAN名称</Col>
                <Col span={9}>
                  <Form.Item
                    name="port_status"
                    rules={[
                      {
                        required: true,
                        message: 'Please input the port status',
                      },
                    ]}
                  >
                    <Select>
                      <Option value="up">up</Option>
                      <Option value="down">down</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={11}></Col>
              </Row>
              <Row>
                <Col span={20}></Col>
                <Col span={4}>
                  <Space>
                    <Button type="primary" htmlType="submit">
                      确定
                    </Button>
                    <Button onClick={handleCancel}>取消</Button>
                  </Space>
                </Col>
              </Row>
            </Form>
          </Modal>
        </>
      );
    }
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
  const ip_manage_edit_onFinish = values => {
    const { dispatch } = props;
    dispatch({
      type: 'netmanage/editIpRow',
      payload: {
        row,
        values,
      },
    });
    message.success('Processing complete!');
    handleCancel();
  };
  if (type === 'ip_manage_edit') {
    if (row) {
      const { id, ip, sub_mask, vlan_name, mtu, status } = row;
      const initialValues = { id, ip, sub_mask, vlan_name, mtu, status };
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
            footer={null}
            width={1000}
          >
            <Form
              onFinish={ip_manage_edit_onFinish}
              initialValues={initialValues}
            >
              <Row align="top" gutter={(24, 24)}>
                <Col span={4}>VLAN编号</Col>
                <Col span={9}>
                  <Form.Item
                    name="id"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <Input placeholder={id} />
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <span>
                    <span style={{ color: 'red' }}>*</span>
                    [系统内置VLAN编号为1,新增VLAN号请输入[2-4094]之间,且不同于已有VLAN的数组]
                  </span>
                </Col>
              </Row>
              <Row align="top" gutter={(24, 24)}>
                <Col span={4}>IP地址</Col>
                <Col span={9}>
                  <Form.Item
                    name="ip"
                    rules={[
                      {
                        required: true,
                        message: 'Please input the IP!',
                      },
                    ]}
                  >
                    <Input placeholder={ip} />
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <span>
                    <span style={{ color: 'red' }}>*</span>
                    设置VLAN接口对应的IP
                  </span>
                </Col>
              </Row>
              <Row align="top" gutter={(24, 24)}>
                <Col span={4}>子网掩码</Col>
                <Col span={9}>
                  <Form.Item
                    name="sub_mask"
                    rules={[
                      {
                        required: true,
                        message: 'Please input the SubnetMask!',
                      },
                    ]}
                  >
                    <Input placeholder={sub_mask} />
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <span>
                    <span style={{ color: 'red' }}>*</span>
                    设置VLAN接口对应的IP的子网掩码
                  </span>
                </Col>
              </Row>
              <Row align="top" gutter={(24, 24)}>
                <Col span={4}>VLAN名称</Col>
                <Col span={9}>
                  <Form.Item name="vlan_name">
                    <Input placeholder={vlan_name} />
                  </Form.Item>
                </Col>
                <Col span={11}>VLAN名称,不定义名称则默认命名为: VLAN编号</Col>
              </Row>
              <Row align="top" gutter={(24, 24)}>
                <Col span={4}>MTU</Col>
                <Col span={9}>
                  <Form.Item
                    name="mtu"
                    rules={[
                      {
                        required: true,
                        message: 'Please input the MTU!',
                      },
                    ]}
                  >
                    <Input placeholder={mtu} />
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <span style={{ color: 'red' }}>*</span>
                </Col>
              </Row>
              <Row align="top" gutter={(24, 24)}>
                <Col span={4}>状态</Col>
                <Col span={9}>
                  <Form.Item
                    name="status"
                    rules={[
                      {
                        required: true,
                        message: 'Please select the status!',
                      },
                    ]}
                  >
                    <Select style={{ width: '100%' }}>
                      <Option value="enabled">启用</Option>
                      <Option value="disabled">禁用</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <span style={{ color: 'red' }}>*</span>
                </Col>
              </Row>
              <Row>
                <Col span={20}></Col>
                <Col span={4}>
                  <Space>
                    <Button type="primary" htmlType="submit">
                      确定
                    </Button>
                    <Button onClick={handleCancel}>取消</Button>
                  </Space>
                </Col>
              </Row>
            </Form>
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

          <Row align="middle" gutter={(24, 24)}>
            <Col span={6}>VLAN名称</Col>
            <Col span={9}>
              <Input />
            </Col>
            <Col span={9}>VLAN名称,不定义名称则默认命名为: VLAN编号</Col>
          </Row>

          <Row align="middle" gutter={(24, 24)}>
            <Col span={6}>MTU</Col>
            <Col span={9}>
              <Input />
            </Col>
            <Col span={9}>
              <span style={{ color: 'red' }}>*</span>
            </Col>
          </Row>

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
