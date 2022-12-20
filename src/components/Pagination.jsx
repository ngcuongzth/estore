import React, { useState, useEffect } from "react";
import MyPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {
    updateProductPerPage,
    updatePage,
} from "../redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { colors } from "../styled/variables";
const Pagination = ({ data, size }) => {
    const dispatch = useDispatch();
    const { pagination, displayProducts } = useSelector((state) => {
        return state.products;
    });
    const { page, products } = pagination;
    let start = (page - 1) * size;
    let end = page * size;
    const totalPage = Math.ceil(displayProducts.length / size);

    const productPerPage = data.slice(start, end);

    useEffect(() => {
        dispatch(updateProductPerPage(productPerPage));
    }, [page, data]);

    const handleChange = (e, value) => {
        dispatch(updatePage(value));
        dispatch(updateProductPerPage(productPerPage));
    };
    return (
        <Wrapper>
            <Stack spacing={2}>
                <MyPagination
                    count={totalPage}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange}
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
