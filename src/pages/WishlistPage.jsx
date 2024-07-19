import { Button, Input } from "@nextui-org/react";
import { useState } from "react";


const WishlistPage = () => {
  const [wishlistItems,setWishlistItems] = useState([]);
  const [wishlistInput,setWishlistInput] = useState("")

  const addInput = () => {
    setWishlistItems([...wishlistItems,wishlistInput]);
    setWishlistInput("")
  }
  return(
    <>
      <div className="flex flex-col">
      <div className="flex items-center mx-auto p-4 w-3/2 sm:w-1/2 gap-4">
      <Input type="email" label="WishList" value={wishlistInput} color="secondary" onChange={(event) => {
        setWishlistInput(event.target.value)
      }} />
      <Button color="secondary" onClick={addInput}>
      add
    </Button>
    </div>
    <ul className="mx-auto">{wishlistItems.map((item) => {
      return <li>{item}</li>
    })}</ul>
    </div>
    </>
  )
}

export default WishlistPage;