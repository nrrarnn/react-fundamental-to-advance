import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { toast } from "sonner";
import { useSelector } from "react-redux";



const WishlistPage = () => {
  const [wishlistItems,setWishlistItems] = useState([]);
  const [wishlistInput,setWishlistInput] = useState("");

  const selector = useSelector((store) => store.counter)
  const messageSelector = useSelector((store) => store.message)

  const fetchWishlistItems = async () => {
    try{

      const response = await axiosInstance.get("/whislist-items")
  
      setWishlistItems(response.data)
    } catch(error) {
      toast.error("Server error")
    }
  }

  // const addInput = () => {
  //   setWishlistItems([...wishlistItems,wishlistInput]);
  //   setWishlistInput("")
  // }

  const addWishlist = async () => {
    try{

      await axiosInstance.post("/whislist-items", {
        name: wishlistInput,
      })
  
      fetchWishlistItems();
      setWishlistInput("");``

      toast.success("You have an added item")
    } catch(error) {
      toast.error("Server Error")
    }
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
    <p>{messageSelector}</p>
    </div>
    </>
  )
}

export default WishlistPage;