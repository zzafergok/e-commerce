import React, { useState, useEffect, Suspense } from 'react'
import 'antd/dist/antd.css'
import './App.css'
import RotateLoader from 'react-spinners/RotateLoader'

const Routes = React.lazy(() => import('./Routes.jsx'))

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <Suspense
      fallback={
        <RotateLoader
          color={'#4A90E2'}
          loading={loading}
          size={15}
          margin={2}
        />
      }
    >
      <>
        <Routes />
      </>
    </Suspense>
  )
}

export default App
