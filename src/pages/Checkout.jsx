import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeSidebar } from "../redux/features/sidebarSlice"


const Checkout = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeSidebar())
    },[])
    return (
        <div>Checkout</div>
    )
}

export default Checkout