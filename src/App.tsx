import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AllRoutes } from './router/index'
import AppContext from './context/AppContext'

function App() {
  const [isActive, setIsActive] = useState(0)

  return (
    <div>
      <AppContext.Provider value={{ isActive, setIsActive }}>
        <Routes>
          {AllRoutes.map((route) => (
            <Route
              path={route.path}
              element={route.element}
              key={route.path}></Route>
          ))}
        </Routes>
      </AppContext.Provider>
    </div>
  )
}

export default App
