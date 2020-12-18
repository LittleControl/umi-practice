import React, { Component } from 'react';
import { connect } from 'umi';
import { Table, Checkbox } from 'antd';
import AppModal from './AppModal';
import './appcard.less';

class AppCard extends Component {
  constructor(props) {
    super(props);
  }
  // state = {
  //   checkAll: false,
  //   checked: [],
  //   checkList: [],
  // }
  // onCheckAllChange = e => {
  //   console.log(e.target)
  // }

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
      dataIndex: 'ip',
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
        if (index == 0) {
          obj.children = <span className="bold">{text}</span>;
        }

        // let checkbox = <Checkbox>{text}</Checkbox>
        // if (index === 0) {
        //   checkbox = (
        //     <Checkbox
        //       onChange={this.onCheckAllChange}
        //       indeterminate={
        //         this.state.checkAll ? false : this.state.checked.length > 0
        //       }
        //     >
        //       <span className="bold">{text}</span>
        //     </Checkbox>
        //   )
        // }
        // obj.children = checkbox
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
      dataIndex: 'service_name',
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
      dataIndex: 'equip_type',
      colSpan: 0,
      render: this.blodFontRender,
    },
    {
      title: '暴露面检测',
      dataIndex: 'weakpawd_count',
      colSpan: 2,
      render: this.modalRowRender,
    },
    {
      title: 't8',
      dataIndex: 'bug_count',
      colSpan: 0,
      render: this.modalRowRender,
    },
    {
      title: '渗透利用',
      dataIndex: 'poc_count',
      colSpan: 2,
      render: this.modalRowRender,
    },
    {
      title: 't10',
      dataIndex: 'exp_count',
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
    const { apps } = this.props.controlcenter;
    let data = [];
    data.push({
      id: 'a1',
      target: '任务目标',
      port: '端口',
      service_name: '服务',
      vendor: '厂商',
      os: '操作系统',
      equip_type: '设备类型',
      weakpawd_count: '弱口令',
      bug_count: '漏洞',
      poc_count: 'POC',
      exp_count: 'EXP',
      operate: '操作',
    });
    data = data.concat(apps);
    return (
      <Table columns={this.columns} dataSource={data} bordered rowKey="id" />
    );
  }
}

export default connect(({ controlcenter }) => ({ controlcenter }))(AppCard);
