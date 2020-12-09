import React, { Component } from 'react';
import { Card } from 'antd';
import styles from './GenCard.less';

class GenCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const SubComponent = this.props.component;
    const data = this.props.data;
    return (
      <Card style={{ width: '100%' }} className={styles.cardSpace}>
        {SubComponent ? <SubComponent data={data} /> : ''}
      </Card>
    );
  }
}

export default GenCard;
