import React, { Component } from 'react';
import { Card } from 'antd';
import styles from './GenCard.less';

class GenCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const SubComponent = this.props.component;
    return (
      <Card style={{ width: '100%' }} className={styles.cardSpace}>
        {SubComponent ? <SubComponent /> : ''}
      </Card>
    );
  }
}

export default GenCard;
