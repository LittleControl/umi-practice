import React, { useState } from 'react';
import { Modal, Button, Steps, message, Row, Col, Input } from 'antd';
import './additemmodal.less';
import EditableTable from './EditableTable';

const { Step } = Steps;

const AddItemModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [current, setCurrent] = React.useState(0);
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
  const steps = [
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
                <span style={{ color: 'red' }}>*</span>
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
              <Input />{' '}
            </Col>
            <Col span={9}>
              <span style={{ color: 'red' }}>*</span>
            </Col>
          </Row>
          <br />
          <Row align="middle" gutter={(24, 24)}>
            <Col span={6}>状态</Col>
            <Col span={9}>
              <Input />{' '}
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
      content: <EditableTable />,
    },
  ];
  return (
    <>
      <Button type="primary" ghost onClick={showModal}>
        新增
      </Button>
      <Modal
        title="VLAN 接口配置"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
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

export default AddItemModal;
