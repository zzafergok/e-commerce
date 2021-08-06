import React, { useState, useEffect } from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import axios from 'axios'

export default function index() {
  const [userData, setUserData] = useState([])

  function getUsers() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((result) => {
        setUserData(result.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getUsers()
  }, [console.log('users', userData)])
  return (
    <div className="ag-theme-alpine" style={{ height: 471, width: 802 }}>
      <AgGridReact rowData={userData}>
        <AgGridColumn headerName="Name" field="name" sortable={true} />
        <AgGridColumn headerName="Username" field="username" sortable={true} />
        <AgGridColumn headerName="Web Site" field="email" sortable={true} />
        <AgGridColumn headerName="City" field="address.city" sortable={true} />
      </AgGridReact>
    </div>
  )
}
