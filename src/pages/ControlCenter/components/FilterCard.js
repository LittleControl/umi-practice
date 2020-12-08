import React, { Component } from 'react';
import { Select, Space, Button } from 'antd';
import styles from './filtercard.less';

const { Option } = Select;

class FilterCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Space size="middle">
        <Select defaultValue="lucy" style={{ width: '10vw' }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <span className={styles.spanfont}>漏洞状态</span>
        <Select defaultValue="lucy" style={{ width: '10vw' }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <span className={styles.spanfont}>弱口令</span>
        <Select defaultValue="lucy" style={{ width: '10vw' }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <span className={styles.spanfont}>POC状态</span>
        <Select defaultValue="lucy" style={{ width: '10vw' }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <span className={styles.spanfont}>EXP状态</span>
        <Select defaultValue="lucy" style={{ width: '10vw' }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Button type="primary">查询</Button>
        <Button>重置</Button>
      </Space>
    );
  }
}

export default FilterCard;
