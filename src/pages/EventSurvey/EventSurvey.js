import React, { Component, Fragment } from 'react';
import { connect } from 'umi';
import { Space } from 'antd';
import GenCard from '@/components/GenCard';
import LinkMenu from './components/LinkMenu';
import AssetInfo from './components/AssetInfo';
import SurveyResult from './components/SurveyResult';
import ResultInfo from './components/ResultInfo';
import './eventsurvey.less';

class EventSurvey extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Space direction="vertical" style={{ width: '100%' }}>
          <GenCard component={LinkMenu} />
          <GenCard component={AssetInfo} />
          <div className="flexible">
            <GenCard component={SurveyResult} sstyle={{ width: '49%' }} />
            <GenCard component={ResultInfo} sstyle={{ width: '49%' }} />
          </div>
        </Space>
      </Fragment>
    );
  }
}

export default EventSurvey;
