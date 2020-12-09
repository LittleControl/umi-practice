import React, { Component } from 'react';
import { Tabs, Table, List } from 'antd';
import styles from './midcard.less';

const { TabPane } = Tabs;

const ipColumns = [
  { title: 'IP', dataIndex: 'ip' },
  { title: '服务数', dataIndex: 'serviceCount' },
];
const portColumns = [
  { title: '端口', dataIndex: 'port' },
  { title: '服务', dataIndex: 'service' },
  { title: '数量', dataIndex: 'pcount' },
];
const vendorColumns = [
  { title: '厂商', dataIndex: 'vendor' },
  { title: '资产数', dataIndex: 'assetCount' },
];
const osColumns = [
  { title: '操作系统', dataIndex: 'os' },
  { title: '数量', dataIndex: 'ocount' },
];
// const ipData = []
// const portData = []
// const flawData = []
// const weakPawdData = []
// const pocData = []
// const expData = []
// const vendorData = []
// const osData = []

class MidCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      ipData,
      portData,
      flawData,
      weakPawdData,
      pocData,
      expData,
      vendorData,
      osData,
    } = this.props.data;
    return (
      <div className={styles.wrap}>
        <div className={styles.item}>
          <Tabs type="card">
            <TabPane tab="IP" key="ip">
              <Table
                columns={ipColumns}
                dataSource={ipData}
                rowKey="id"
                pagination={{ pageSize: 10, hideOnSinglePage: true }}
                size="small"
              />
            </TabPane>
            <TabPane tab="端口" key="port">
              <Table
                columns={portColumns}
                dataSource={portData}
                pagination={{ pageSize: 10, hideOnSinglePage: true }}
                rowKey="id"
                size="small"
              />
            </TabPane>
          </Tabs>
        </div>
        <div className={styles.item}>
          <Tabs type="card">
            <TabPane tab="高危漏洞" key="flaw">
              <List
                size="small"
                bordered
                dataSource={flawData}
                renderItem={item => (
                  <List.Item>
                    <a href={item.url} target="_blank">
                      {item.name}
                    </a>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="弱口令" key="weak">
              <List
                size="small"
                bordered
                dataSource={weakPawdData}
                renderItem={item => (
                  <List.Item>
                    <a href={item.url} target="_blank">
                      {item.name}
                    </a>
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>
        </div>
        <div className={styles.item}>
          <Tabs type="card">
            <TabPane tab="POC" key="poc">
              <List
                size="small"
                bordered
                dataSource={pocData}
                renderItem={item => (
                  <List.Item>
                    <a href={item.url} target="_blank">
                      {item.name}
                    </a>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="EXP" key="exp">
              <List
                size="small"
                bordered
                dataSource={expData}
                renderItem={item => (
                  <List.Item>
                    <a href={item.url} target="_blank">
                      {item.name}
                    </a>
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>
        </div>
        <div className={styles.item}>
          <Tabs type="card">
            <TabPane tab="厂商" key="vendor">
              <Table
                columns={vendorColumns}
                dataSource={vendorData}
                pagination={{ pageSize: 10, hideOnSinglePage: true }}
                rowKey="id"
                size="small"
              />
            </TabPane>
            <TabPane tab="操作系统" key="os">
              <Table
                columns={osColumns}
                dataSource={osData}
                pagination={{ pageSize: 10, hideOnSinglePage: true }}
                rowKey="id"
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
