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
const subArmory = [
  { route: '/buglib', name: '漏洞库', key: 'BugLib' },
  { route: '/passwdlib', name: '口令库', key: 'PasswdLib' },
  { route: '/poclib', name: 'POC库', key: 'POCLib' },
  { route: '/explib', name: 'EXP库', key: 'EXPLib' },
];
const subSysManage = [
  { route: '/netmanage', name: '网络管理', key: 'NetManage' },
  { route: '/accountmanage', name: '帐号管理', key: 'AccountManage' },
  { route: '/licensemanage', name: 'LINCENSE管理', key: 'LicenseMangage' },
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
                defaultOpenKeys={['Armory', 'SysManage']}
                style={{ height: '100%' }}
              >
                {menuItems.map(value => {
                  return (
                    <Menu.Item key={value.key}>
                      <Link to={value.route}>{value.name}</Link>
                    </Menu.Item>
                  );
                })}
                <SubMenu key="Armory" title="武器库">
                  {subArmory.map(value => {
                    return (
                      <Menu.Item key={value.key}>
                        <Link to={value.route}>{value.name}</Link>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
                <SubMenu key="SysManage" title="系统管理">
                  {subSysManage.map(value => {
                    return (
                      <Menu.Item key={value.key}>
                        <Link to={value.route}>{value.name}</Link>
                      </Menu.Item>
                    );
                  })}
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
