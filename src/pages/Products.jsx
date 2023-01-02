import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { advertisements } from "../utils/constants";
import ProductPR from "../components/ProductPR";
import styled from "styled-components/macro";
import { getProducts } from "../redux/features/productSlice";
import Filter from "../components/Layouts/Products/Filter";
import GridProducts from "../components/GridProducts";
import Pagination from "../components/Pagination";
import Sort from '../components/Layouts/Products/Sort'
import { bRadius, breakpoints, colors, themes } from "../styled/variables";
import FilterConfig from "../components/Layouts/Products/FilterConfig";
import { handleFilter, clearFilters } from "../redux/features/filterSlice";


// new updae 
import { loadProducts } from "../redux/features/filterSlice";
const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // get all products 
  useEffect(() => {
    dispatch(getProducts());
  }, [])
  const { allProducts } = useSelector((state) => {
    return state.products
  })
  // filtered products 
  const { filteredProducts, filters, sort, } = useSelector((state) => {
    return state.filter;
  })
  // update products list in filterSlice
  useEffect(() => {
    dispatch(loadProducts(allProducts))
  }, [allProducts])

  // update filterProducts 

  useEffect(() => {
    dispatch(handleFilter())
  }, [filters, sort])

  const { advertisement_3, advertisement_4 } = advertisements;
  const { img: img_3, content: content_3 } = advertisement_3;
  const { img: img_4, content: content_4 } = advertisement_4;
  const {
    f_title: f_title_3,
    s_title: s_title_3,
    desc: desc_3,
    content_btn: content_btn_3,
  } = content_3;
  const {
    f_title: f_title_4,
    s_title: s_title_4,
    desc: desc_4,
    content_btn: content_btn_4,
  } = content_4;

  return (
    <Wrapper>
      <ProductPR
        img={img_3}
        f_title={f_title_3}
        desc={desc_3}
        s_title={s_title_3}
        content_btn={content_btn_3}
      />
      <ProductContainter>
        <Container className="container">
          <Filter />
          <ConfigWrapper>
            <h4>Categories:</h4>
            <div className="box">
              <FilterConfig name="Brand" config={filters.brand.label} />
              <FilterConfig name="Color" config={filters.color.label} />
              <FilterConfig name="Size" config={filters.size.label} />
            </div>
          </ConfigWrapper>
          <ClearBtn>
            <button
              className="clear-btn"
              onClick={() => {
                dispatch(clearFilters());
              }}
            >
              Clear filter
            </button>
          </ClearBtn>
          <Sort />
          <GridProducts />
          <Pagination filteredProducts={filteredProducts} size={12} />
        </Container>
      </ProductContainter>
      <ProductPR
        img={img_4}
        f_title={f_title_4}
        desc={desc_4}
        s_title={s_title_4}
        content_btn={content_btn_4}
      />
    </Wrapper>
  );
};


const ClearBtn = styled.div`
margin-top: 1rem;
@media screen and (max-width: ${breakpoints.small}){
  justify-content: center;
  display: flex;
}
  button{
    background-color: ${colors.white};
    color: ${colors.secondary};
    padding: 5px 10px;
    border-radius: ${bRadius.b_radius_20};
    box-shadow: 0px 0px 1px #ebebeb, 0px 3px 4px #fff;
    border: none;
    &:hover {
      background-color: ${colors.secondary};
      color: ${colors.text};
    }
  }
`
const Wrapper = styled.main`
  padding-top: 100px;
`;

const ProductContainter = styled.div`
  background-image: ${themes.section};
`;
const Container = styled.div`
  padding: 3rem 2rem;
`;
const ConfigWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  align-items: center;

  @media screen and (max-width: ${breakpoints.medium}) {
    display: grid;
  }
  @media screen and (max-width: ${breakpoints.small}) {
    justify-content: center;
  }

  .box {
    display: flex;
    gap: 1rem;
    align-items: center;
    @media screen and (max-width: ${breakpoints.small}) {
      flex-direction: column;
      align-items: center;
      /* div {
        width: 50%;
      } */
    }
  }
  button {
    box-shadow: 0px 0px 1px #ebebeb, 0px 3px 4px #fff;
  }
  h4 {
    color: ${colors.text};
    font-weight: 600;
    font-size: 1rem;
    @media screen and (max-width: ${breakpoints.small}) {
      text-align: center;
    }
  }
`;

export default Products;
