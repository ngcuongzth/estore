import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import {
    Footer, Header, ScrollToTop,
    Sidebar
} from './index'
import { useSelector, useDispatch } from "react-redux"
import { calcCartTotals } from "../../redux/features/cartSlice"
const SharedLayout = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector((state) => {
        return state.cart
    })
    useEffect(() => {
        dispatch(calcCartTotals())
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])


    return (
        <main>
            <Header />
            <Outlet />
            <ScrollToTop />
            <Sidebar />
            <Footer />
        </main>
    )
}

export default SharedLayout