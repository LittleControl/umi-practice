import React, { Component } from 'react';
import { Tabs, Table } from 'antd';
import styles from './midcard.less';

const { TabPane } = Tabs;
const columns = [
  {
    title: 'IP',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: '服务数',
    dataIndex: 'age',
    width: 150,
  },
];
const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
class MidCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.item}>
          <Tabs type="card">
            <TabPane tab="IP" key="1">
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 10, hideOnSinglePage: true }}
                size="small"
              />
            </TabPane>
            <TabPane tab="端口" key="2">
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 10, hideOnSinglePage: true }}
                size="small"
              />
            </TabPane>
          </Tabs>
        </div>
        <div className={styles.item}>
          <Tabs type="card">
            <TabPane tab="IP" key="1">
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 10, hideOnSinglePage: true }}
                size="small"
              />
            </TabPane>
            <TabPane tab="端口" key="2">
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 10, hideOnSinglePage: true }}
                size="small"
              />
            </TabPane>
          </Tabs>
        </div>
        <div className={styles.item}>
          <Tabs type="card">
            <TabPane tab="IP" key="1">
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 10, hideOnSinglePage: true }}
                size="small"
              />
            </TabPane>
            <TabPane tab="端口" key="2">
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 10, hideOnSinglePage: true }}
                size="small"
              />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default MidCard;
