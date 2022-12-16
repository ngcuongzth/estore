import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeSidebar } from "../redux/features/sidebarSlice"

const Cart = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeSidebar())
    },[])
    return (
        <div>Cart</div>
    )
}

export default Cart