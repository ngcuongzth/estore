import styled from "styled-components/macro"
import { bRadius, breakpoints, colors } from "../../../styled/variables"
import { useSelector, useDispatch } from "react-redux"
import { updateSort } from "../../../redux/features/filterSlice"
const Sort = () => {
    const dispatch = useDispatch();

    const { sort } = useSelector((state) => {
        return state.filter;
    })
    const sortList = [
        {
            id: 1,
            label: "Low to High",
            target: "low-to-high"
        },
        {
            id: 2,
            label: "High to Low",
            target: "high-to-low"
        }
    ]
    return (
        <Wrapper>
            <Form>
                <span>Sort by: </span>
                <BtnWrapper>
                    {sortList.map((item) => {
                        return <button
                            onClick={() => {
                                dispatch(updateSort(item.target))
                            }}
                            className={item.target === sort ? "active" : ""}
                            key={item.id}>
                            {item.label}
                        </button>
                    })}
                </BtnWrapper>
            </Form>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 1rem 0;
    @media screen and (max-width: ${breakpoints.small}){
        justify-content: center;
    }
`

const Form = styled.div`
    display: flex;
    gap: 1rem;
     @media screen and (max-width: ${breakpoints.small}){
        flex-direction: column;
    }
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${colors.text};
        font-weight: 600;
    }
    `
const BtnWrapper = styled.div`
    border-radius: ${bRadius.b_radius_10};
    overflow: hidden;
    background-color: ${colors.white};
    box-shadow: 0px 0px 1px #ebebeb, 0px 3px 4px #fff;
    button{
        padding: 5px 10px;
        font-size: 1rem;
        border: none;
        font-weight: 400;
        &.active{
            background-color: ${colors.secondary};
            color: ${colors.white};
        }
    }
`
export default Sort