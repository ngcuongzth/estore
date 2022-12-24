import { useEffect } from "react"
import VideoPR from '../components/Layouts/Home/VideoPR'
import Hero from "../components/Layouts/Home/Hero"
import Offer from "../components/Layouts/Home/Offer"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../redux/features/productSlice"
import { advertisements } from "../utils/constants"
import ProductPR from "../components/ProductPR"
import SlideProduct from "../components/SlideProduct"


const Home = () => {
    const dispatch = useDispatch();
    const { advertisement_1, advertisement_2 } = advertisements;
    const { img: img_1, content: content_1 } = advertisement_1;
    const { img: img_2, content: content_2 } = advertisement_2;
    const { f_title: f_title_1, s_title: s_title_1, desc: desc_1, content_btn: content_btn_1 } = content_1;
    const { f_title: f_title_2, s_title: s_title_2, desc: desc_2, content_btn: content_btn_2 } = content_2;

    useEffect(() => {
        dispatch(getProducts());
    }, [])

    const { onSaleOffs, bestSellers, bigSaleOffs } = useSelector((state) => {
        return state.products
    })
    return (
        <main>
            <Hero />
            <VideoPR url="https://cdn.sanity.io/files/qa41whrn/prod/d177236afc280be2ac111506fcb71b68ef5a1d60.mp4" />
            <SlideProduct data={bestSellers} title="Popular products" />
            <ProductPR img={img_1} f_title={f_title_1} desc={desc_1} s_title={s_title_1} content_btn={content_btn_1} />
            <SlideProduct data={onSaleOffs} title="flash sale" />
            <ProductPR img={img_2} f_title={f_title_2} desc={desc_2} s_title={s_title_2} content_btn={content_btn_2} />
            <SlideProduct data={bigSaleOffs} title="super discount" />
            <Offer />
        </main>
    )
}


export default Home