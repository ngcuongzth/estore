import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeSidebar } from "../redux/features/sidebarSlice"


const Login = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeSidebar())
    },[])
    
  return (
    <div>
      login
    </div>
  )
}

export default Login
