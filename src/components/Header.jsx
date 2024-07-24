import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Heading } from "./Heading";

const Header = () => {
  const[message, setMessage] = useState("Hello World")
  // componentDidMount
  // useEffect(() => {
  //   alert("DID MOUNT UF")
  // },[]) //Jika Array nya kosong maka sifatnya sama seperti componentDidMount

  // // componentWillUnmount
  // useEffect(()=>{
  //   // apapun yg di return di dalam useEffect akan ter execute
  //   return () => {
  //     alert("Will Unmount Uf")
  //   }
  // },[])

  // // componentDidUpdate
  // useEffect(()=>{
  //   alert("Did Update uf")
  // },[message]) //ketika value yg ada di array ini maka ini akan ke trigger

  const changeMessage = () => {
    setMessage("Change State")
  }

  return(
    <header  style={{
      backgroundColor:"darkgray",
      padding:"8px"

    }}>
      <h1>{message}</h1>
      <Button onClick={changeMessage}>Click</Button>
      <Heading/>
    </header>
  )
}

export default Header;