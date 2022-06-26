// import Header from '../components/header/'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className='wrapper'>
      <Outlet />
    </div>
  )
}
