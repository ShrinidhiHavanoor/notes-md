import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home'
import StudyResource from './Pages/StudyResource'
import About from './Pages/About'
import Contact from './Pages/Contact'
import PageNotFound from './Pages/PageNotFound'

interface AppProps {
  
}

const App: FC<AppProps> = ({}) => {
  return <>
  <Routes>
    <Route path='/' element={<MainLayout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/study-resource' element={<StudyResource/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Route>
    <Route path='*' element={<PageNotFound/>}/>
  </Routes>
  </>
}

export default App