
import './App.css'
import Counter from './components/Counter'
import CounterClass from './components/CounterClass'
import Footer from './components/Footer'
import FormList2 from './components/FormList2'
import HeaderNav from './components/HeaderNav'
import TodoCard from './components/TodoCard'

function App() {

  return (
    <>
      <HeaderNav/>
        <FormList2/>
        <TodoCard/>
        <Counter/>
        <CounterClass/>
      <Footer message="ini adalah footer"/>
    </>
  )
}

export default App
