import {Button, Input} from "@nextui-org/react";
import { useRef, useState } from "react";


export const FormList = () => {
  const inputRef = useRef();
  const [wishlistItems,setWishlistItems] = useState([])

  const addInput = () => {
    const currentInputValue = inputRef.current.value;

    setWishlistItems([...wishlistItems,currentInputValue])
  }
  return(
     <div className="flex flex-col">
      <div className="flex items-center mx-auto p-4 w-3/2 sm:w-1/2 gap-4">
      <Input type="email" label="WishList" color="secondary" ref={inputRef} />
      <Button color="secondary" onClick={addInput}>
      add
    </Button>
    </div>
    <ul className="mx-auto">{wishlistItems.map((item) => {
      return <li>{item}</li>
    })}</ul>
    </div>
  )
}
