import { createContext } from 'react'

interface IAppContext {
  isActive: number
  setIsActive: React.Dispatch<React.SetStateAction<number>>
}

const AppContext = createContext<IAppContext>({
  isActive: 0,
  setIsActive: () => {},
})

export default AppContext
