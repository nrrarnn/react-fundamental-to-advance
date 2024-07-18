
import './App.css'
import Counter from './components/Counter'
import CounterClass from './components/CounterClass'
import Footer from './components/Footer'
import { FormList } from './components/FormList'
import HeaderNav from './components/HeaderNav'
import TodoCard from './components/TodoCard'

function App() {

  return (
    <>
      <HeaderNav/>
        <FormList/>
        <TodoCard/>
        <Counter/>
        <CounterClass/>
      <Footer message="ini adalah footer"/>
    </>
  )
}

export default App
