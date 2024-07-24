import React, { useContext } from "react"
import { SignUpContext } from "../context/SignUpContext"

export const Heading = () => {
  const signUpContext = useContext(SignUpContext)
  return(
    <>  
    <p>Ini adalah heading</p>
    <p>{signUpContext.title}</p>

    </>
  )
}

// class Heading extends React.Component {
//   static contextType = SignUpContext;

//   render() {
//     return <p>{this.context.title}</p>;
//   }
// }
// export default Heading