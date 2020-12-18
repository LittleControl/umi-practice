import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'umi';

const columns = [
  { title: '目标', dataIndex: 'ip' },
  { title: '端口', dataIndex: 'port' },
  { title: '服务', dataIndex: 'service_name' },
  { title: '操作系统', dataIndex: 'os' },
  { title: '设备类型', dataIndex: 'equip_type' },
  { title: '设备厂商', dataIndex: 'vendor' },
  { title: '所属任务', dataIndex: 'operate' },
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
    const { table_data } = this.props.targetdetection;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={table_data}
          rowKey="id"
        />
      </div>
    );
  }
}

export default connect(({ targetdetection }) => ({ targetdetection }))(
  TableCard,
);
