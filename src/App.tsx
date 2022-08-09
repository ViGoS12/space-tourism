import { Route, Routes } from 'react-router-dom'

import { AllRoutes } from './router/index'

function App() {
  return (
    <div>
      <Routes>
        {AllRoutes.map((route) => (
          <Route
            path={route.path}
            element={route.element}
            key={route.path}></Route>
        ))}
      </Routes>
    </div>
  )
}

export default App
