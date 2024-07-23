import { Button, Divider, Input} from "@nextui-org/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const selector = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [inputCounter, setInputCounter] = useState(0)

  const[count,setCount] = useState(0);
  function addCount () {
    setCount(count + 1)
  }
  function subtractCount(){
    setCount(count - 1)
  }

  const incrementGlobalCounter = () => {
    dispatch({
      type: "INCREMENT"
    })
  }
  const decrementGlobalCounter = () => {
    dispatch({
      type: "DECREMENT"
    })
  }
  const setGlobalCounter = () => {
    dispatch({
      type: "SET",
      payload: inputCounter
    })
  }
  return(
    <div className="flex flex-wrap gap-5 justify-center items-center h-screen">
      <Button color="primary" onClick={addCount}> + </Button> 
        <p>{count}</p>
      <Button color="danger" onClick={subtractCount}> - </Button>
      <Divider/>

      <div>
        <Input type="number" value={inputCounter} onChange={(event) => {
          setInputCounter(parseInt(event.target.value))
        }}/>
        <Button color="secondary" onClick={setGlobalCounter}>Set</Button>
      </div>

      <Button color="primary" onClick={incrementGlobalCounter}> + </Button> 
        <p>{selector.count}</p>
      <Button color="danger" onClick={decrementGlobalCounter}> - </Button>
      <p>Global state: </p>
    </div>
  )
}

export default Counter;