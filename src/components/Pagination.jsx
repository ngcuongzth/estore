import React, { useEffect } from "react";
import MyPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { colors } from "../styled/variables";
import { updateProductsPerPage, updatePage } from "../redux/features/filterSlice";


const Pagination = ({ test, size }) => {
    const dispatch = useDispatch();

    const { pagination, filteredProducts, sort } = useSelector((state) => {
        return state.filter;
    })

    const { page } = pagination;
    let start = (page - 1) * size;
    let end = page * size;
    const totalPage = Math.ceil(filteredProducts.length / size);

    const productsPerPage = filteredProducts.slice(start, end);


    const handleChange = (e, value) => {
        dispatch(updatePage(value));
    };
    useEffect(() => {
        dispatch(
            updateProductsPerPage(productsPerPage)
        )
        // eslint-disable-next-line
    }, [filteredProducts, page, sort])

    return (
        <Wrapper>
            <Stack spacing={2}>
                <MyPagination
                    count={totalPage}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange}
                    page={page}
                />
            </Stack>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root {
    background-color: ${colors.white};
    &:hover {
      color: ${colors.white};
      background-color: ${colors.secondary};
    }
  }
  .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    color: ${colors.white};
    background-color: ${colors.secondary};
  }
`;

export default Pagination;
