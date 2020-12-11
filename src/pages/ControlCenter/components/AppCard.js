import React, { Component } from 'react';
import { connect } from 'umi';
import { Table } from 'antd';
import AppModal from './AppModal';
import './appcard.less';

class AppCard extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectedRowKeys: [],
  };
  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };

  blodFontRender = (text, row, index) => {
    const obj = {
      children: text,
      props: [],
    };
    if (index === 0) {
      obj.children = <span className="bold">{text}</span>;
    }
    return obj;
  };

  modalRowRender = (data, row, index) => {
    const obj = {
      children: data,
      props: [],
    };
    if (index === 0) {
      obj.children = <span className="bold">{data}</span>;
    } else {
      obj.children = <AppModal data={data} />;
    }
    return obj;
  };
  columns = [
    {
      title: '',
      dataIndex: 'target',
      colSpan: 2,
      render: (text, row, index) => {
        const obj = {
          children: text,
          props: [],
        };
        if (index === 1 || index === 4 || index === 6) {
          obj.props.rowSpan = 2;
        }
        if (index === 2 || index === 5 || index === 7) {
          obj.props.colSpan = 0;
        }
        if (index === 0) {
          obj.children = <span className="bold">{text}</span>;
        }
        return obj;
      },
    },
    {
      title: '',
      dataIndex: 'port',
      colSpan: 0,
      render: this.blodFontRender,
    },
    {
      title: '目标侦察',
      dataIndex: 'service',
      colSpan: 4,
      render: this.blodFontRender,
    },
    {
      title: 't4',
      dataIndex: 'vendor',
      colSpan: 0,
      render: this.blodFontRender,
    },
    {
      title: 't5',
      dataIndex: 'os',
      colSpan: 0,
      render: this.blodFontRender,
    },
    {
      title: 't6',
      dataIndex: 'equiptype',
      colSpan: 0,
      render: this.blodFontRender,
    },
    {
      title: '暴露面检测',
      dataIndex: 'weakpasswd',
      colSpan: 2,
      render: this.modalRowRender,
    },
    {
      title: 't8',
      dataIndex: 'loophole',
      colSpan: 0,
      render: this.modalRowRender,
    },
    {
      title: '渗透利用',
      dataIndex: 'poc',
      colSpan: 2,
      render: this.modalRowRender,
    },
    {
      title: 't10',
      dataIndex: 'exp',
      colSpan: 0,
      render: this.modalRowRender,
    },
    {
      title: '任务链日志',
      dataIndex: 'operate',
      render: this.modalRowRender,
    },
  ];
  render() {
    const { selectedRowKeys } = this.state;
    const { apps } = this.props.controlcenter;
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
