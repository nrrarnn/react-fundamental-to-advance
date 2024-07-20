import { useParams } from "react-router-dom"

export const ProfilePage = () => {
  const params = useParams()
  return(
    <>
      <div className="flex justify-center font-bold">Ini profile</div> 
      <p>{params.username}</p>
    </>
  )
}