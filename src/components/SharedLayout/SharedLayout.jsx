import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import {
    Footer, Header, ScrollToTop,
    Sidebar,
} from './index'
import { useSelector, useDispatch } from "react-redux"
import { calcCartTotals } from "../../redux/features/cartSlice"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react"
import { handleLogin } from "../../redux/features/userSlice"

const SharedLayout = () => {
    const { isAuthenticated,
        user } = useAuth0()
    const dispatch = useDispatch()
    const { cart } = useSelector((state) => {
        return state.cart
    })


    useEffect(() => {
        if (isAuthenticated) {
            dispatch(handleLogin(user))
        }
        // eslint-disable-next-line
    }, [isAuthenticated])


    useEffect(() => {
        dispatch(calcCartTotals())
        localStorage.setItem('cart', JSON.stringify(cart))
        // eslint-disable-next-line
    }, [cart])


    return (
        <main>
            <Header />
            <Outlet />
            <ToastContainer autoClose={2000} />
            <ScrollToTop />
            <Sidebar />
            <Footer />
        </main>
    )
}

export default SharedLayout