import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeSidebar } from "../redux/features/sidebarSlice"


const Products = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeSidebar())
    },[])
    return (
        <div>Products</div>
    )
}

export default Products