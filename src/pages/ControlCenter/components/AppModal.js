import React, { useState, Fragment } from 'react';
import { Modal, Button, Table, Timeline } from 'antd';

const AppModal = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const tagRender = (text, row, index) => {
    let obj = {
      children: text,
      props: [],
    };
    console.log(text, typeof text);
    if (text === 0) {
      obj.children = (
        <Button type="primary" danger>
          高风险
        </Button>
      );
    }
    if (text === 1) {
      obj.children = (
        <Button danger ghost>
          中风险
        </Button>
      );
    }
    if (text === 2) {
      obj.children = (
        <Button type="primary" ghost>
          低风险
        </Button>
      );
    }
    return obj;
  };
  const { type, text, data } = props.data;
  const weakCol = [
    { title: 'IP', dataIndex: 'ip' },
    { title: '用户名', dataIndex: 'username' },
    { title: '密码', dataIndex: 'passwd' },
  ];
  const flawCol = [
    { title: '风险级别', dataIndex: 'level', render: tagRender },
    { title: '漏洞名称', dataIndex: 'name' },
    { title: '漏洞分类', dataIndex: 'sort' },
    { title: '漏洞类型', dataIndex: 'type' },
  ];
  const pocCol = [
    { title: '风险级别', dataIndex: 'level', render: tagRender },
    { title: 'POC名称', dataIndex: 'name' },
    { title: 'POC类别', dataIndex: 'sort' },
    { title: 'POC厂商', dataIndex: 'vendor' },
  ];
  const expCol = [
    { title: '风险级别', dataIndex: 'level', render: tagRender },
    { title: 'EXP名称', dataIndex: 'name' },
    { title: 'EXP类别', dataIndex: 'sort' },
    { title: 'EXP厂商', dataIndex: 'vendor' },
  ];
  let res = (
    <Fragment>
      <Button type="link" onClick={showModal}>
        {text}
      </Button>
      <Modal
        title="任务链日志"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>
            Solve initial network problems 2015-09-01
          </Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>
            Network problems being solved 2015-09-01
          </Timeline.Item>
        </Timeline>
      </Modal>
    </Fragment>
  );
  if (type === 'weakpasswd') {
    res = (
      <Fragment>
        <Button type="link" onClick={showModal}>
          {text}
        </Button>
        <Modal
          title="弱口令"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={'50vw'}
        >
          <Table columns={weakCol} dataSource={data} rowKey="id" />
        </Modal>
      </Fragment>
    );
  }
  if (type === 'loophole') {
    res = (
      <Fragment>
        <Button type="link" onClick={showModal}>
          {text}
        </Button>
        <Modal
          title="漏洞详情"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={'50vw'}
        >
          <Table columns={flawCol} dataSource={data} rowKey="id" />
        </Modal>
      </Fragment>
    );
  }
  if (type === 'poc') {
    res = (
      <Fragment>
        <Button type="link" onClick={showModal}>
          {text}
        </Button>
        <Modal
          title="POC详情"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={'50vw'}
        >
          <Table columns={pocCol} dataSource={data} rowKey="id" />
        </Modal>
      </Fragment>
    );
  }
  if (type === 'exp') {
    res = (
      <Fragment>
        <Button type="link" onClick={showModal}>
          {text}
        </Button>
        <Modal
          title="EXP详情"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={'50vw'}
        >
          <Table columns={expCol} dataSource={data} rowKey="id" />
        </Modal>
      </Fragment>
    );
  }
  return res;
};

export default AppModal;
