import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components/macro";
import { bRadius, breakpoints, colors } from "../../../styled/variables";
import Category from "./Category";
import { changeSearch } from "../../../redux/features/filterSlice";
const Filter = () => {
    const dispatch = useDispatch();
    const { allProducts } = useSelector((state) => {
        return state.products;
    })
    const { filters } = useSelector((state) => {
        return state.filter
    })

    const brands = Array.from(new Set(allProducts.map((item) => {
        return item.category
    })))
    const sizes = ["All", ...Array.from(new Set(allProducts.map((item) => {
        return item.size
    }))).sort((a, b) => {
        return a - b
    })]
    const colors = ["All", ...Array.from(new Set(allProducts.map((item) => {
        return item.color
    })))]


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
        if (item === "All") {
            return {
                value: 'All',
                label: 'All'
            }
        }
    })
    const newColors = [...colors].map((item) => {
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
        if (item === "All") {
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
            <h4>Filters:</h4>
            <div className="box">
                <Category title="Brand" name="brand" data={newBands} />
                <Category title="Color" name="color" data={newColors} />
                <Category title="Size" name="size" data={newSizes} />
                <SearchForm onSubmit={(e) => {
                    return e.preventDefault();
                }}>
                    <input type="text" placeholder="Search..."
                        onChange={(e) => {
                            dispatch(changeSearch(e.target.value))
                        }} value={filters.search} />
                </SearchForm>
            </div>
        </Wrapper>
    )
}

const SearchForm = styled.form`
flex-grow: 1;
    input{
        padding: 5px 10px;
        border-radius: ${bRadius.b_radius_5};
        font-size: 1rem;
        width: 100%;
        max-width: 400px;
        color: ${colors.title};
        border: 2px solid #0f172a17;
        background-color: ${colors.white};
        outline: none;
        &:focus{
            border-color: ${colors.secondary};
        }
    }
    @media screen and (max-width: ${breakpoints.medium}){
        width: 50%;
    }
`
const Wrapper = styled.section`
h4{
        color: ${colors.text};
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 1rem;
    @media screen and (max-width: ${breakpoints.small}){
            text-align: center;
        }
}
    .box{
        display: flex;
        gap: 1rem;
        @media screen and (max-width: ${breakpoints.medium}){
            flex-direction: column;
        }
         @media screen and (max-width: ${breakpoints.small}){
            flex-direction: column;
            align-items: center;
        }
    }
`



export default Filter