import React, { Fragment, Component } from 'react';
import { Link } from 'umi';
import { Layout, Menu } from 'antd';
import Header from '@/components/Header';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
const menuItems = [
  { route: '/controlcenter', name: '任务中心', key: 'ControlCenter' },
  { route: '/targetdetection', name: '目标侦测', key: 'TargetDetction' },
  { route: '/eventsurvey', name: '事件调查', key: 'EventSurvey' },
];

class BasicLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Layout>
          <Layout>
            <Sider width="12vw" className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['ControlCenter']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                {menuItems.map(value => {
                  return (
                    <Menu.Item key={value.key}>
                      <Link to={value.route}>{value.name}</Link>
                    </Menu.Item>
                  );
                })}
                <SubMenu key="sub1" title="武器库">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Fragment>
    );
  }
}

export default BasicLayout;
