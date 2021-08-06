import React from 'react'

import { Image } from 'antd'
import errorPage from '../../../assets/images/error-transparent-2.png'

export default function index() {
  return (
    <div className="zg-bg-color-primary-3">
      <div className="zg-d-flex-center ant-row-center">
        <Image src={errorPage} preview={false} />
      </div>
    </div>
  )
}
