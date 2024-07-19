import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";


const WishlistPage = () => {
  const [wishlistItems,setWishlistItems] = useState([]);
  const [wishlistInput,setWishlistInput] = useState("")

  const fetchWishlistItems = async () => {
    const response = await axiosInstance.get("/whislist-items")

    setWishlistItems(response.data)
  }

  const addInput = () => {
    setWishlistItems([...wishlistItems,wishlistInput]);
    setWishlistInput("")
  }

  const addWishlist = async () => {
    await axiosInstance.post("/whislist-items", {
      name: wishlistInput,
    })

    fetchWishlistItems();
    setWishlistInput("")
  }

  useEffect(() => {
    fetchWishlistItems();
  },[])
  return(
    <>
      <div className="flex flex-col">
      <div className="flex items-center mx-auto p-4 w-3/2 sm:w-1/2 gap-4">
      <Input type="email" label="WishList" value={wishlistInput} color="secondary" onChange={(event) => {
        setWishlistInput(event.target.value)
      }} />
      <Button color="secondary" onClick={addWishlist}>
      add
    </Button>
    </div>
    <ul className="mx-auto">{wishlistItems.map((item) => {
      return <li key={item.id}>{item.name}</li>
    })}</ul>
    </div>
    </>
  )
}

export default WishlistPage;