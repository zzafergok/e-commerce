import React, { useState } from 'react'
import { Layout, Menu, Row } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons'
import moment from 'moment'
import 'moment/locale/tr'

const { Header, Sider, Content } = Layout

export default function index({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const localLocale = moment()
  const time = localLocale.format('LLL')

  function toggle() {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} width={256}>
          <div style={{ height: '60px' }} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ backgroundColor: '#ffffff' }}
          >
            <Row justify="space-between">
              <div style={{ paddingTop: '0px' }}>
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: 'trigger',
                    onClick: toggle
                  }
                )}
              </div>
              {time}
            </Row>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  )
}
