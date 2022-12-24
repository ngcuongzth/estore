import { Outlet } from "react-router-dom"

import {
    Footer, Header, ScrollToTop,
    Sidebar, SearchForm
} from './index'
const SharedLayout = () => {
    return (
        <main>
            <Header />
            <SearchForm />
            <Outlet />
            <ScrollToTop />
            <Sidebar />
            <Footer />
        </main>
    )
}

export default SharedLayout