import React, { Component } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import styles from './asset.less';

class Asset extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const assets = this.props.data;
    console.log(assets);
    return (
      <div className={styles.wrap}>
        <div className={styles.item}>
          <div className={styles.left}>
            <DeleteOutlined className={styles.icon} />
          </div>
          <div className={styles.right}>
            <span>{assets.allAssets}</span>
            <span>全部资产</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <DeleteOutlined className={styles.icon} />
          </div>
          <div className={styles.right}>
            <span>{assets.switch}</span>
            <span>交换路由设备</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <DeleteOutlined className={styles.icon} />
          </div>
          <div className={styles.right}>
            <span>{assets.industrial}</span>
            <span>工业控制设备</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <DeleteOutlined className={styles.icon} />
          </div>
          <div className={styles.right}>
            <span>{assets.lot}</span>
            <span>物联网设备</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <DeleteOutlined className={styles.icon} />
          </div>
          <div className={styles.right}>
            <span>{assets.others}</span>
            <span>其他资产</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Asset;
