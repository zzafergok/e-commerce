import React from 'react'
import {
  Layout,
  Row,
  Breadcrumb,
  Button,
  Col,
  Avatar,
  Dropdown,
  Menu
} from 'antd'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/tr'
import avatar from '../../../assets/images/logo.png'

const { Header, Content, Footer } = Layout

export default function index({ children }) {
  const localLocale = moment()
  const time = localLocale.format('LLL')

  const menu = (
    <Menu>
      <Menu.Item key="0">Telefon</Menu.Item>
      <Menu.Item key="1">Bilgisayar</Menu.Item>
      <Menu.Item key="3">Televizyon</Menu.Item>
    </Menu>
  )

  return (
    <>
      <Layout>
        <Header
          className="zg-bg-color-black-60 "
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '96.5%'
          }}
        >
          <Col className="zg-d-flex-center" offset={9}>
            <Avatar size={36} src={avatar} className="zg-mr-32" />
            <Dropdown
              className="zg-mr-16"
              overlay={menu}
              trigger={['click']}
              placement="bottomLeft"
              arrow
            >
              <Button
                type="text"
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                Categories
              </Button>
            </Dropdown>
            <Link to="/campaigns">
              <Button type="text" className="zg-mr-8">
                Campaigns
              </Button>
            </Link>
            <Link to="solution-center">
              <Button type="text" className="zg-mr-8">
                Solution Center
              </Button>
            </Link>
          </Col>
          <Col className="zg-d-flex-center zg-mr-4" offset={6}>
            <Button type="primary">Login</Button>
          </Col>
          <Col className="zg-d-flex-center zg-mr-4">
            <Button type="primary">Order Basket</Button>
          </Col>
        </Header>
        <Content
          className=""
          style={{
            padding: '0 50px',
            marginTop: 64
          }}
        >
          <Breadcrumb className="zg-d-flex zg-mt-24">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>
          <div className="" style={{ padding: 24, minHeight: 380 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  )
}
