
import './App.css'
import Counter from './components/Counter'
import CounterClass from './components/CounterClass'
import Footer from './components/Footer'
import Header from './components/Header'
import TodoCard from './components/TodoCard'

function App() {

  return (
    <>
      <Header/>
        <TodoCard/>
        <Counter/>
        <CounterClass/>
      <Footer message="ini adalah footer"/>
    </>
  )
}

export default App
