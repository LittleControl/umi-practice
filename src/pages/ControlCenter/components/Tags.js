import React, { Component } from 'react';
import { connect } from 'umi';
import { Button } from 'antd';
import './tags.less';

class Tags extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    loadings: [true, true, true, true],
  };
  render() {
    const { tags } = this.props.controlcenter;
    const { loadings } = this.state;
    if (tags.bug_count || tags.bug_count == 0) {
      loadings[0] = false;
    }
    if (tags.weakpawd_count || tags.weakpawd_count == 0) {
      loadings[1] = false;
    }
    if (tags.poc_count || tags.poc_count == 0) {
      loadings[2] = false;
    }
    if (tags.exp_count || tags.exp_count == 0) {
      loadings[3] = false;
    }

    return (
      <div className="flexbox">
        <div className="item">
          <span>高危漏洞: </span>
          <Button danger loading={loadings[0]}>
            {tags.bug_count}
          </Button>
        </div>
        <div className="item">
          <span>弱口令: </span>
          <Button danger loading={loadings[1]}>
            {tags.weakpawd_count}
          </Button>
        </div>
        <div className="item">
          <span>验证成功: </span>
          <Button type="primary" ghost loading={loadings[2]}>
            {tags.poc_count}
          </Button>
        </div>
        <div className="item">
          <span>利用成功: </span>
          <Button type="primary" ghost loading={loadings[3]}>
            {tags.exp_count}
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(({ controlcenter }) => ({ controlcenter }))(Tags);
