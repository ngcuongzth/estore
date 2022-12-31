import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
  Home, Products, SingleProduct,
  Cart, Checkout, About, Private,
  Error
} from "./pages"
import GlobleStyles from "./styled/GlobalStyles"
import SharedLayout from "./components/SharedLayout/SharedLayout"
import { Auth0Provider } from "@auth0/auth0-react"

const App = () => {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <GlobleStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Products />} />
            <Route path="/store/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
            <Route path="/checkout" element={<Private>
              <Checkout />
            </Private>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  )
}

export default App