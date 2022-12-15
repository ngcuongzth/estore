import { Outlet } from "react-router-dom"
import { Footer, Header, ScrollToTop, Sidebar } from '../Layouts'

const SharedLayout = () => {
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