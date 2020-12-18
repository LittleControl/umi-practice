import React, { Component, Fragment } from 'react';
import { Divider } from 'antd';

class ResultInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <h2>结果详情</h2>
        <Divider />
        <div>后门类检测</div>
        <div>是</div>
        <div>日志类安全分析</div>
        <div>生命在于折腾, 不在折腾中崩溃,就在折腾中涅磐</div>
      </Fragment>
    );
  }
}

export default ResultInfo;
