import './scss/app.scss'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import { AllRoutes } from './router/index'

function App() {
  return (
    <div>
      {' '}
      qwe
      {/* <Routes>
        <Route path='/' element={<AppLayout />}>
          {AllRoutes.map((route) => (
            <Route
              path={route.path}
              element={route.element}
              key={route.path}></Route>
          ))}
        </Route>
      </Routes> */}
    </div>
  )
}

export default App
