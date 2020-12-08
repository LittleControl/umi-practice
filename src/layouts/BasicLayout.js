import React, { Fragment, Component } from 'react';
import { Link } from 'umi';
import { Layout, Menu, Breadcrumb } from 'antd';
import Header from '@/components/Header';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
const menuItems = [
  { route: '/controlcenter', name: '任务中心', key: 'ControlCenter' },
  { route: '/targetdetection', name: '目标侦测', key: 'TargetDetction' },
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
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['ControlCenter']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
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
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>任务中心</Breadcrumb.Item>
              </Breadcrumb>
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
