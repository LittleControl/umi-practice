import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
  { title: '目标', dataIndex: 'target' },
  { title: '端口', dataIndex: 'port' },
  { title: '服务', dataIndex: 'service' },
  { title: '操作系统', dataIndex: 'os' },
  { title: '设备类型', dataIndex: 'type' },
  { title: '设备厂商', dataIndex: 'vendor' },
  { title: '所属任务', dataIndex: 'task' },
];
class TableCard extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectedRowKeys: [],
  };
  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };
  render() {
    const { selectedRowKeys } = this.state;
    const { data } = this.props;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          rowKey="id"
        />
      </div>
    );
  }
}

export default TableCard;
