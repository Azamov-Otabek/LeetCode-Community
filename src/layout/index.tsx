import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Root } from '../router/root';
import './style.scss'
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const navigate = useNavigate()

  const menuItems = Root.map((item, index) => ({
    key: String(index + 1),
    icon: item.icon,
    label: item.title,
    path: item.path, // Include the path in the menu item
  }));

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        className='sidebar'
        style={{ height: '100vh', background: 'white' }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu mode="inline" defaultSelectedKeys={['1']} items={menuItems} onClick={({ key }) => {
            const item = menuItems.find(i => i.key === key);
            if (item) {
              navigate(item.path);
            }
          }} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', background: '#EEF2F6' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
           <Outlet/>
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default App;
