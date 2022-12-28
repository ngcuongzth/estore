import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
  Home, Products, SingleProduct,
  Cart, Checkout, About,
  Error, Login
} from "./pages"
import GlobleStyles from "./styled/GlobalStyles"
import SharedLayout from "./components/SharedLayout/SharedLayout"


const App = () => {
  return (
    <>
      <GlobleStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Products />} />
            <Route path="/store/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App