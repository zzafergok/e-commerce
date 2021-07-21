import React from 'react'
import 'antd/dist/antd.css'
import './App.css'
// import Loader from 'react-loader-spinner'

// const Routes = React.lazy(() => import('./Routes.jsx'))
import Routes from './Routes.jsx'

function App() {
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 4000)
  // }, [])
  return (
    // <Suspense
    //   fallback={
    //     <Loader
    //       type="Puff"
    //       color="#00BFFF"
    //       height={100}
    //       width={100}
    //       timeout={10000}
    //     />
    //   }
    // >
    <>
      <Routes />
    </>
    // </Suspense>
  )
}

export default App
