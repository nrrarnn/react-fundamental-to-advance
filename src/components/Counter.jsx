import { Button } from "@nextui-org/react";
import { useState } from "react";

const Counter = () => {
  const[count,setCount] = useState(0);
  function addCount () {
    setCount(count + 1)
  }
  function subtractCount(){
    setCount(count - 1)
  }
  return(
    <div className="flex flex-wrap gap-5 justify-center">
      <Button color="primary" onClick={addCount}> + </Button> 
        <p>{count}</p>
      <Button color="danger" onClick={subtractCount}> - </Button>
    </div>
  )
}

export default Counter;