import { useEffect } from "react"
import { closeSidebar } from "../redux/features/sidebarSlice"
import VideoPR from "../components/Advertisement/VideoPR"
import Hero from "../components/Hero"
import Offer from "../components/Offer"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../redux/features/productSlice"
import Grid from "../components/Grid"
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeSidebar())
    }, []);


    useEffect(() => {
        dispatch(getProducts());
    }, [])

    const { onSaleOffs, bestSellers } = useSelector((state) => {
        return state.products
    })
    return (
        <main>
            <Hero />
            <VideoPR url="https://cdn.sanity.io/files/qa41whrn/prod/d177236afc280be2ac111506fcb71b68ef5a1d60.mp4" />
            <Offer />
            <Grid data={bestSellers} />
        </main>
    )
}



export default Home