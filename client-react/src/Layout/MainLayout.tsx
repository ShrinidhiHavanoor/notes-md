import Navbar from '@/components/navbar'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

interface MainLayoutProps {
  
}

const MainLayout: FC<MainLayoutProps> = ({}) => {
  return <div>
    <Navbar/>
    <Outlet/>
  </div>
}

export default MainLayout