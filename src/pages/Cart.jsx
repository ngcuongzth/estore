import styled from "styled-components/macro"
import CartContent from "../components/Layouts/Cart/CartContent"
const Cart = () => {
    return (
        <Wrapper>
            <Container className="container">
                <CartContent />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    padding-top: 100px;
`

const Container = styled.div`
    padding: 0 2rem;
`
export default Cart