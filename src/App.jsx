
import { Toaster } from 'sonner'
import './App.css'
import Counter from './components/Counter'
import CounterClass from './components/CounterClass'
import Footer from './components/Footer'
import FormList2 from './components/FormList2'
import HeaderNav from './components/HeaderNav'
import TodoCard from './components/TodoCard'
import { SignUpPage } from './pages/SignUpPage'
import WishlistPage from './pages/WishlistPage'
import { Route, Routes } from 'react-router-dom'
import { ProfilePage } from './pages/ProfilePages'

function App() {

  // return <SignUpPage/>
  return (
    <Routes>
      <Route element={<WishlistPage/>} path='/wishlist' />
       <Route element={<Counter/>} path='/'/>
       <Route element={<CounterClass/>} path='/counter-class'/>
      {/* <TodoCard/> */}
      <Route element={<ProfilePage/>} path='/profile/:username'/>
    </Routes>
  )
}

export default App
