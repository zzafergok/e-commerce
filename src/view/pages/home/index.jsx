import React, { useEffect, useState } from 'react'
import { Button, Row, Col, Table } from 'antd'
import axios from 'axios'
import { Trans, useTranslation } from 'react-i18next'

import FullLayout from '../../../@core/layout/full-layout/index.jsx'

const { Column } = Table

export default function index() {
  const [users, setUsers] = useState([])

  const { t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  function getUsers() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((result) => {
        console.log(result.data)
        setUsers(result.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getUsers()
  }, [console.log('users', users)])
  return (
    <>
      <FullLayout>
        <Row>
          <Button onClick={() => changeLanguage('en')}>EN</Button>
          <Button onClick={() => changeLanguage('tr')}>TR</Button>
          <hr />
          <Trans i18nKey="description.part1">
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
          <div>{t('description.part2')}</div>
        </Row>
        <Row justify="center">{process.env.NODE_ENV}</Row>
        <Row justify="center">
          <Col>
            <h5 style={{ marginRight: '36px' }}>
              You are in the Home Page now
            </h5>
          </Col>
          <Col>
            <Button
              type="danger"
              onClick={() => {
                // eslint-disable-next-line
                alert('tıklandın...')
              }}
            >
              Merhaba
            </Button>
          </Col>
        </Row>
        <Row justify="center">
          <Table dataSource={users}>
            <Column title="First Name" dataIndex="name" key="id" />
            <Column title="User Name" dataIndex="username" key="id" />
            <Column title="Mail" dataIndex="email" key="id" />
            <Column title="Phone" dataIndex="phone" key="id" />
          </Table>
        </Row>
      </FullLayout>
    </>
  )
}
