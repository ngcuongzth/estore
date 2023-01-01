import styled from "styled-components/macro"
import StripeCheckout from "../components/Layouts/Checkout/StripeCheckout"


const Checkout = () => {
    return (
        <main>
            <Wrapper>
                <StripeCheckout />
            </Wrapper>
        </main>
    )
}

const Wrapper = styled.main`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`


export default Checkout