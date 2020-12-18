import React, { Component } from 'react';
import { Card } from 'antd';
import styles from './GenCard.less';

class GenCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const SubComponent = this.props.component;
    const special_style = this.props.sstyle
      ? this.props.sstyle
      : { width: '100%' };
    return (
      <Card style={special_style} className={styles.cardSpace}>
        {SubComponent ? <SubComponent /> : ''}
      </Card>
    );
  }
}

export default GenCard;
