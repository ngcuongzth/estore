import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components/macro";
import Category from "./Category";
const Filter = () => {
    const { allProducts } = useSelector((state) => {
        return state.products;
    })
    const brands = Array.from(new Set(allProducts.map((item) => {
        return item.category
    })))
    const sizes = ["All", ...Array.from(new Set(allProducts.map((item) => {
        return item.size
    }))).sort((a, b) => {
        return a - b
    })]
    const colors = Array.from(new Set(allProducts.map((item) => {
        return item.color
    })))
    const newBands = ["All", ...brands].map((item) => {
        if (item === 1) {
            return {
                value: 1,
                label: "Converse"
            }
        }
        if (item === 2) {
            return {
                value: 2,
                label: 'Vans'
            }
        }
        if (item === 3) {
            return {
                value: 3,
                label: "Adidas"
            }
        }
        if (item === 4) {
            return {
                value: 4,
                label: 'Puma'
            }
        }
        if (item === 5) {
            return {
                value: 5,
                label: 'MLB'
            }
        }
        else {
            return {
                value: "All",
                label: 'All'
            }
        }
    })
    const newColors = ["All", ...colors].map((item) => {
        if (item === 'trắng') {
            return {
                value: "trắng",
                label: "White"
            }
        }
        if (item === 'đen') {
            return {
                value: "đen",
                label: "Black"
            }
        }
        if (item === 'xanh') {
            return {
                value: "xanh",
                label: "Green/Dard Blue"
            }
        }
        if (item === 'vàng') {
            return {
                value: "vàng",
                label: "Yellow"
            }
        }
        if (item === "hồng") {
            return {
                value: "hồng",
                label: "Pink"
            }
        }
        if (item === "đỏ") {
            return {
                value: "đỏ",
                label: "Red"
            }
        }
        else {
            return {
                value: "All",
                label: "All"
            }
        }
    })
    const newSizes = sizes.map((item) => {
        return {
            value: item,
            label: item
        }
    })

    return (
        <Wrapper>
            <Category title="Brand" data={newBands} />
            <Category title="Color" data={newColors} />
            <Category title="Size" data={newSizes} />
        </Wrapper>
    )
}

const Wrapper = styled.aside`
    display: flex;
    gap: 1rem;
`



export default Filter