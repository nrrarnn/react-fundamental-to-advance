// import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export const ProfilePage = () => {
  const params = useParams()
  // const countSelector = useSelector((state) => state.count)
  return(
    <>
      <div className="flex justify-center font-bold">Ini profile</div> 
      <p>{params.username}</p>
      {/* <p>{countSelector.count}</p> */}
    </>
  )
}