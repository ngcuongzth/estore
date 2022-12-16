import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeSidebar } from "../redux/features/sidebarSlice"
const About = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeSidebar())
    },[])
    return (
        <div>About</div>
    )
}

export default About