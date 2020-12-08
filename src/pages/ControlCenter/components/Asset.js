import React, { Component } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import styles from './asset.less';

class Asset extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.item}>
          <div className={styles.left}>
            <DeleteOutlined className={styles.icon} />
          </div>
          <div className={styles.right}>
            <span>5000</span>
            <span>全部资产</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <DeleteOutlined className={styles.icon} />
          </div>
          <div className={styles.right}>
            <span>5000</span>
            <span>全部资产</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <DeleteOutlined className={styles.icon} />
          </div>
          <div className={styles.right}>
            <span>5000</span>
            <span>全部资产</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <DeleteOutlined className={styles.icon} />
          </div>
          <div className={styles.right}>
            <span>5000</span>
            <span>全部资产</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Asset;
