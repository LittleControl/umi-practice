import React, { Component } from 'react';
import { connect } from 'umi';
import { Table, Checkbox } from 'antd';
import AppModal from './AppModal';
import './appcard.less';

class AppCard extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  modalRowRender = value => {
    const obj = {
      children: <AppModal data={value}>{value.text}</AppModal>,
      props: [],
    };
    return obj;
  };
  columns = [
    {
      title: '',
      children: [
        {
          title: '任务目标',
          dataIndex: 'ip',
        },
        {
          title: '端口',
          dataIndex: 'port',
        },
      ],
    },
    {
      title: '目标侦察',
      children: [
        {
          title: '服务',
          dataIndex: 'service_name',
        },
        {
          title: '厂商',
          dataIndex: 'vendor',
        },
        {
          title: '操作系统',
          dataIndex: 'os',
        },
        {
          title: '设备类型',
          dataIndex: 'equip_type',
        },
      ],
    },
    {
      title: '暴露面检测',
      children: [
        {
          title: '弱口令',
          dataIndex: 'weakpawd_count',
          render: this.modalRowRender,
        },
        {
          title: '漏洞',
          dataIndex: 'bug_count',
          render: this.modalRowRender,
        },
      ],
    },
    {
      title: '渗透利用',
      children: [
        {
          title: 'POC',
          dataIndex: 'poc_count',
          render: this.modalRowRender,
        },
        {
          title: 'EXP',
          dataIndex: 'exp_count',
          render: this.modalRowRender,
        },
      ],
    },
    {
      title: '任务链日志',
      children: [
        {
          title: '操作',
          dataIndex: 'operate',
          render: this.modalRowRender,
        },
      ],
    },
  ];
  render() {
    const { apps } = this.props.controlcenter;
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <Table
        rowSelection={rowSelection}
        columns={this.columns}
        dataSource={apps}
        bordered
        rowKey="id"
      />
    );
  }
}

export default connect(({ controlcenter }) => ({ controlcenter }))(AppCard);
